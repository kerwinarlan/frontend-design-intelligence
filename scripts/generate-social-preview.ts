import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

async function generateSocialPreview() {
  const outputDir = path.resolve("assets");
  fs.mkdirSync(outputDir, { recursive: true });

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1280px;
      height: 640px;
      background-color: #09090b;
      color: #f4f4f5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 64px 80px;
      position: relative;
      overflow: hidden;
    }
    
    /* Subtle Grid Background Pattern */
    .grid-pattern {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, #18181b 1px, transparent 1px),
        linear-gradient(to bottom, #18181b 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.35;
      mask-image: radial-gradient(circle at 50% 30%, black 40%, transparent 80%);
      -webkit-mask-image: radial-gradient(circle at 50% 30%, black 40%, transparent 80%);
    }

    .header-pills {
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 10;
    }

    .pill {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 13px;
      color: #a1a1aa;
      background-color: rgba(24, 24, 27, 0.8);
      border: 1px solid #27272a;
      padding: 6px 14px;
      border-radius: 9999px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .pill-accent {
      color: #60a5fa;
      border-color: rgba(37, 99, 235, 0.3);
      background-color: rgba(37, 99, 235, 0.1);
    }

    .main-content {
      z-index: 10;
      max-width: 900px;
    }

    .title {
      font-size: 56px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #ffffff;
      line-height: 1.1;
    }

    .tagline {
      font-size: 26px;
      font-weight: 500;
      color: #3b82f6;
      margin-top: 16px;
      letter-spacing: -0.01em;
    }

    .description {
      font-size: 18px;
      color: #a1a1aa;
      margin-top: 16px;
      line-height: 1.5;
      max-width: 820px;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #27272a;
      padding-top: 24px;
      z-index: 10;
    }

    .tech-stack {
      display: flex;
      gap: 20px;
      font-size: 14px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      color: #71717a;
    }

    .author {
      font-size: 14px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      color: #a1a1aa;
    }
  </style>
</head>
<body>
  <div class="grid-pattern"></div>

  <div class="header-pills">
    <span class="pill pill-accent">Pi Agent Skill System</span>
    <span class="pill">Agent Skills Standard</span>
    <span class="pill">Playwright QA</span>
  </div>

  <div class="main-content">
    <h1 class="title">Frontend Design Intelligence</h1>
    <div class="tagline">Design intelligence for coding agents.</div>
    <p class="description">
      A persistent skill system for auditing, redesigning, animating, and portfolio-polishing frontend applications using curated motion knowledge, framework recipes, and visual evaluation.
    </p>
  </div>

  <div class="footer">
    <div class="tech-stack">
      <span>TypeScript</span> • 
      <span>React 19</span> • 
      <span>Next.js 15</span> • 
      <span>Tailwind CSS</span> • 
      <span>Framer Motion</span> • 
      <span>GSAP</span>
    </div>
    <div class="author">github.com/kerwinarlan</div>
  </div>
</body>
</html>`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 640 } });
  await page.setContent(htmlContent);
  await page.waitForTimeout(300);

  const imagePath = path.join(outputDir, "github-social-preview.png");
  await page.screenshot({ path: imagePath });
  await browser.close();

  const stats = fs.statSync(imagePath);
  console.log(`✔ Generated assets/github-social-preview.png (${Math.round(stats.size / 1024)} KB)`);
}

generateSocialPreview().catch((err) => {
  console.error("Failed to generate social preview:", err);
  process.exit(1);
});
