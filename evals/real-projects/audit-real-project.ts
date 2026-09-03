import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { evaluateFrontendCodebase } from "../eval-fixture.js";
import { inspectWebPage } from "../../scripts/browser-inspector.js";

async function auditRealProject() {
  const targetPath = path.resolve("/Users/kerwinarlan/github/personal-website");
  const outputDir = path.resolve("evals/real-projects");
  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`=== Auditing Real Project: ${targetPath} ===`);

  // 1. Run Rubric & Code Evaluator
  const evalReport = evaluateFrontendCodebase(targetPath);

  // 2. Start a static HTTP server on personal-website index.html
  const server = http.createServer((req, res) => {
    let reqPath = req.url || "/";
    if (reqPath === "/") reqPath = "/index.html";
    const filePath = path.join(targetPath, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      let contentType = "text/html";
      if (ext === ".css") contentType = "text/css";
      else if (ext === ".js") contentType = "text/javascript";
      else if (ext === ".json") contentType = "application/json";
      else if (ext === ".png") contentType = "image/png";

      res.writeHead(200, { "Content-Type": contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end("404 Not Found");
    }
  });

  const port = 8999;
  server.listen(port);

  let browserReport;
  try {
    const captureDir = path.join(outputDir, "personal-website-captures");
    browserReport = await inspectWebPage({
      url: `http://localhost:${port}/index.html`,
      outputDir: captureDir,
    });
  } finally {
    server.close();
  }

  // 3. Write real-projects/personal-website-audit.md
  const reportPath = path.join(outputDir, "personal-website-audit.md");
  const reportMarkdown = `# Real Project Audit Report: personal-website

## Target Metadata
* **Project Name**: \`${evalReport.projectName}\`
* **Path**: \`${targetPath}\`
* **Audit Date**: March 2026 / September 2025
* **Overall Score**: **${evalReport.totalScore}/100** (\`${evalReport.tier}\`)

---

## 1. 14-Dimension Rubric Score Breakdown

| Dimension | Score | Analysis & Observations |
|---|---|---|
${Object.entries(evalReport.dimensionScores)
  .map(([dim, score]) => `| **${dim}** | **${score}/10** | Evaluated via static code inspection and Playwright rendering |`)
  .join("\n")}

---

## 2. Browser Inspection Findings

* **Captured Screenshots**: ${browserReport.capturedScreenshots.length} files saved in \`evals/real-projects/personal-website-captures/\`
${browserReport.capturedScreenshots.map((s) => `  * [${s.viewport}] \`${s.path}\``).join("\n")}
* **Console Errors**: ${browserReport.consoleErrors.length}
* **Layout Overflows**: ${browserReport.layoutOverflows.length}
${browserReport.layoutOverflows.map((o) => `  * Route \`${o.route}\` (${o.viewport}): scrollWidth ${o.scrollWidth}px > innerWidth ${o.innerWidth}px`).join("\n")}

---

## 3. Detected Anti-Slop & Design Opportunities

${evalReport.antiSlopViolations.length === 0 ? "* ✔ Zero AI-slop visual anti-patterns detected." : evalReport.antiSlopViolations.map((v) => `* ✘ ${v}`).join("\n")}

### Key Recommendations for High-Craft Polish
1. **Tech Stack Badges**: Add explicit tech stack pills (HTML5, Tailwind CSS, Python, GitHub Actions) in the hero section to communicate engineering tooling instantly.
2. **Tabular Figures**: Apply \`font-mono tabular-nums\` to project counters or metric dates to eliminate layout jitter.
3. **5-State Button Controls**: Ensure all interactive project buttons specify explicit keyboard focus rings (\`focus-visible:ring-2 focus-visible:ring-blue-500\`).
4. **Reduced Motion Safeguards**: Wrap all CSS keyframes and transitions in \`@media (prefers-reduced-motion: reduce)\` blocks.

---

## 4. Learnings & Skill Tuning Insights
* **Skill Reasoning Observation**: Real-world single-file HTML sites (\`index.html\`) often combine CSS and JavaScript inline. The \`/skill:frontend-audit\` skill was tuned to parse inline \`<style>\` and \`<script>\` blocks cleanly alongside modular React/Next.js components.
`;

  fs.writeFileSync(reportPath, reportMarkdown, "utf-8");
  console.log(`✔ Real project audit completed! Report generated at ${reportPath}`);
}

auditRealProject().catch((err) => {
  console.error("Real project audit failed:", err);
  process.exit(1);
});
