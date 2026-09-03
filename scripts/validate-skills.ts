import fs from "node:fs";
import path from "node:path";

interface SkillValidationResult {
  file: string;
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateSkills(): SkillValidationResult[] {
  const skillsDir = path.resolve("skills");
  const results: SkillValidationResult[] = [];

  if (!fs.existsSync(skillsDir)) {
    console.error(`Skills directory not found at ${skillsDir}`);
    return results;
  }

  const entries = fs.readdirSync(skillsDir);

  for (const entry of entries) {
    const fullPath = path.join(skillsDir, entry);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const skillFile = path.join(fullPath, "SKILL.md");
    const relativePath = path.relative(".", skillFile);
    const result: SkillValidationResult = {
      file: relativePath,
      valid: true,
      errors: [],
      warnings: [],
    };

    if (!fs.existsSync(skillFile)) {
      result.valid = false;
      result.errors.push(`Missing SKILL.md in directory ${entry}`);
      results.push(result);
      continue;
    }

    const content = fs.readFileSync(skillFile, "utf-8");

    // Check frontmatter
    if (!content.startsWith("---")) {
      result.valid = false;
      result.errors.push("Missing frontmatter opening '---'");
    }

    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      result.valid = false;
      result.errors.push("Invalid frontmatter format");
    } else {
      const yamlContent = frontmatterMatch[1];
      const nameMatch = yamlContent.match(/name:\s*([^\n]+)/);
      const descMatch = yamlContent.match(/description:\s*([^\n]+)/);

      if (!nameMatch) {
        result.valid = false;
        result.errors.push("Missing 'name' in frontmatter");
      } else {
        const name = nameMatch[1].trim();
        if (!/^[a-z0-9-]+$/.test(name)) {
          result.valid = false;
          result.errors.push(`Name '${name}' must be lowercase alphanumeric with hyphens`);
        }
      }

      if (!descMatch) {
        result.valid = false;
        result.errors.push("Missing 'description' in frontmatter");
      } else if (descMatch[1].trim().length > 1024) {
        result.warnings.push("Description exceeds 1024 character limit");
      }
    }

    // Check required sections
    const requiredSections = [
      "WHEN TO USE",
      "WHEN NOT TO USE",
      "WORKFLOW",
      "REQUIRED INSPECTION",
      "DECISION RULES",
      "OUTPUT",
    ];

    for (const section of requiredSections) {
      if (!content.includes(section)) {
        result.warnings.push(`Recommended section '${section}' is missing`);
      }
    }

    results.push(result);
  }

  return results;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("=== Validating Pi Agent Skills ===");
  const results = validateSkills();
  let hasErrors = false;

  for (const res of results) {
    if (res.valid) {
      console.log(`\x1b[32m[PASS]\x1b[0m ${res.file}`);
    } else {
      console.log(`\x1b[31m[FAIL]\x1b[0m ${res.file}`);
      hasErrors = true;
    }
    for (const err of res.errors) console.log(`   └─ ERROR: ${err}`);
    for (const warn of res.warnings) console.log(`   └─ WARN: ${warn}`);
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log(`All ${results.length} Pi skills validated successfully!`);
  }
}
