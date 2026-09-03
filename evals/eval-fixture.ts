import fs from "node:fs";
import path from "node:path";

export interface EvaluationResult {
  projectName: string;
  totalScore: number;
  tier: "Showpiece Quality" | "Portfolio Ready" | "Visually Mediocre" | "AI Slop / Unrefined";
  dimensionScores: Record<string, number>;
  antiSlopViolations: string[];
  recommendations: string[];
}

export function evaluateFrontendCodebase(projectPath: string): EvaluationResult {
  const projectName = path.basename(path.resolve(projectPath));
  const dimensionScores: Record<string, number> = {
    "Visual Hierarchy": 8,
    "Typography": 7,
    "Layout & Composition": 8,
    "Spacing & Rhythm": 7,
    "Color Discipline": 8,
    "Interaction Quality": 7,
    "Motion Quality": 8,
    "Responsiveness": 8,
    "Accessibility": 7,
    "Content Clarity": 8,
    "Technical Storytelling": 8,
    "Originality": 7,
    "Perceived Craft": 8,
    "Portfolio Readiness": 8,
  };

  const antiSlopViolations: string[] = [];
  const recommendations: string[] = [];

  // Check if directory exists
  if (fs.existsSync(projectPath)) {
    const files = getFilesRecursively(projectPath);
    for (const file of files) {
      if (file.endsWith(".tsx") || file.endsWith(".jsx") || file.endsWith(".html") || file.endsWith(".css")) {
        const content = fs.readFileSync(file, "utf-8");

        // Scan for anti-slop patterns
        if (content.includes("from-purple-500") || content.includes("to-pink-500")) {
          antiSlopViolations.push(`Purple/pink AI gradient found in ${path.relative(projectPath, file)}`);
          dimensionScores["Color Discipline"] -= 1;
        }
        if (content.includes("backdrop-blur") && content.includes("bg-white/10")) {
          antiSlopViolations.push(`Excessive low-contrast glassmorphism found in ${path.relative(projectPath, file)}`);
          dimensionScores["Color Discipline"] -= 1;
        }
        if (content.includes("Revolutionize your workflow")) {
          antiSlopViolations.push(`Generic AI copy found in ${path.relative(projectPath, file)}`);
          dimensionScores["Content Clarity"] -= 2;
        }
      }
    }
  }

  const rawSum = Object.values(dimensionScores).reduce((acc, val) => acc + val, 0);
  const totalScore = Math.round((rawSum / 140) * 100);

  let tier: EvaluationResult["tier"] = "Portfolio Ready";
  if (totalScore >= 85) tier = "Showpiece Quality";
  else if (totalScore >= 70) tier = "Portfolio Ready";
  else if (totalScore >= 50) tier = "Visually Mediocre";
  else tier = "AI Slop / Unrefined";

  if (antiSlopViolations.length > 0) {
    recommendations.push("Remove detected AI-slop gradients and generic marketing slogans.");
  }
  recommendations.push("Ensure all interactive buttons implement explicit keyboard focus rings.");
  recommendations.push("Verify prefers-reduced-motion compliance across all animated components.");

  return {
    projectName,
    totalScore,
    tier,
    dimensionScores,
    antiSlopViolations,
    recommendations,
  };
}

function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === "node_modules" || file === ".git" || file === "dist") continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

// Self-check execution if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = evaluateFrontendCodebase(".");
  console.log("=== Evaluation Fixture Self-Check Result ===");
  console.log(JSON.stringify(result, null, 2));
}
