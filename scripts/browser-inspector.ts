import fs from "node:fs";
import path from "node:path";
import { chromium, type Page, type Browser } from "playwright";

export interface InspectionOptions {
  url: string;
  outputDir: string;
  routes?: string[];
  reducedMotion?: boolean;
}

export interface InspectionResult {
  url: string;
  outputDir: string;
  consoleErrors: string[];
  layoutOverflows: Array<{ route: string; viewport: string; scrollWidth: number; innerWidth: number }>;
  capturedScreenshots: Array<{ route: string; viewport: "desktop" | "mobile"; path: string }>;
}

export async function inspectWebPage(options: InspectionOptions): Promise<InspectionResult> {
  const { url, outputDir, routes = ["/"], reducedMotion = false } = options;
  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors: string[] = [];
  const layoutOverflows: InspectionResult["layoutOverflows"] = [];
  const capturedScreenshots: InspectionResult["capturedScreenshots"] = [];

  const browser: Browser = await chromium.launch({ headless: true });

  try {
    const viewports = [
      { name: "desktop" as const, width: 1280, height: 800 },
      { name: "mobile" as const, width: 390, height: 844 },
    ];

    for (const vp of viewports) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        reducedMotion: reducedMotion ? "reduce" : "no-preference",
      });

      const page: Page = await context.newPage();

      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(`[${vp.name}] ${msg.text()}`);
        }
      });

      page.on("pageerror", (err) => {
        consoleErrors.push(`[${vp.name}] Page Error: ${err.message}`);
      });

      for (const route of routes) {
        const targetUrl = new URL(route, url).toString();
        try {
          await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 15000 });
        } catch {
          // Fallback to domcontentloaded if networkidle times out
          await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 15000 });
        }

        // Wait for potential font rendering & transitions
        await page.waitForTimeout(500);

        // Check horizontal layout overflow
        const overflow = await page.evaluate(() => {
          return {
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
          };
        });

        if (overflow.scrollWidth > overflow.innerWidth) {
          layoutOverflows.push({
            route,
            viewport: vp.name,
            scrollWidth: overflow.scrollWidth,
            innerWidth: overflow.innerWidth,
          });
        }

        // Format screenshot filename
        const routeName = route === "/" ? "home" : route.replace(/[^a-z0-9]/gi, "_");
        const filename = `${routeName}_${vp.name}.png`;
        const screenshotPath = path.join(outputDir, filename);

        await page.screenshot({ path: screenshotPath, fullPage: true });
        capturedScreenshots.push({ route, viewport: vp.name, path: screenshotPath });
      }

      await context.close();
    }
  } finally {
    await browser.close();
  }

  return {
    url,
    outputDir,
    consoleErrors,
    layoutOverflows,
    capturedScreenshots,
  };
}

// Direct CLI Execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const targetUrl = process.argv[2] || "http://localhost:3000";
  const outputDir = path.resolve("evals/captures", `run_${Date.now()}`);

  console.log(`=== Running Playwright Browser Inspector ===`);
  console.log(`Target URL: ${targetUrl}`);
  console.log(`Output Directory: ${outputDir}\n`);

  inspectWebPage({ url: targetUrl, outputDir })
    .then((res) => {
      console.log(`✔ Inspection complete!`);
      console.log(`Captured Screenshots: ${res.capturedScreenshots.length}`);
      console.log(`Console Errors: ${res.consoleErrors.length}`);
      console.log(`Layout Overflows: ${res.layoutOverflows.length}`);
      for (const s of res.capturedScreenshots) {
        console.log(`  └─ [${s.viewport}] ${s.path}`);
      }
      if (res.layoutOverflows.length > 0) {
        console.log(`\x1b[31mLayout Overflows Detected:\x1b[0m`);
        for (const o of res.layoutOverflows) {
          console.log(`  └─ Route ${o.route} (${o.viewport}): scrollWidth ${o.scrollWidth}px > innerWidth ${o.innerWidth}px`);
        }
      }
    })
    .catch((err) => {
      console.error(`✘ Inspection failed:`, err);
      process.exit(1);
    });
}
