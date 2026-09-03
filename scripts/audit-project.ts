import fs from "node:fs";
import path from "node:path";
import { evaluateFrontendCodebase } from "../evals/eval-fixture.js";

function runProjectAudit() {
  const targetPath = process.argv[2] || ".";
  console.log(`\n==================================================`);
  console.log(`FRONTEND DESIGN INTELLIGENCE - AUDIT CLI`);
  console.log(`Target Directory: ${path.resolve(targetPath)}`);
  console.log(`==================================================\n`);

  const report = evaluateFrontendCodebase(targetPath);

  console.log(`Project Name : ${report.projectName}`);
  console.log(`Overall Score: ${report.totalScore}/100`);
  console.log(`Quality Tier : ${report.tier}\n`);

  console.log("--- DIMENSION SCORES ---");
  for (const [dim, score] of Object.entries(report.dimensionScores)) {
    const bar = "█".repeat(score) + "░".repeat(10 - score);
    console.log(`${dim.padEnd(24)} [${bar}] ${score}/10`);
  }

  console.log("\n--- ANTI-SLOP PATTERN AUDIT ---");
  if (report.antiSlopViolations.length === 0) {
    console.log("\x1b[32m✔ No AI-slop visual anti-patterns detected!\x1b[0m");
  } else {
    for (const v of report.antiSlopViolations) {
      console.log(`\x1b[31m✘ ${v}\x1b[0m`);
    }
  }

  console.log("\n--- PRIORITIZED RECOMMENDATIONS ---");
  for (let i = 0; i < report.recommendations.length; i++) {
    console.log(`${i + 1}. ${report.recommendations[i]}`);
  }
  console.log("\n==================================================\n");
}

runProjectAudit();
