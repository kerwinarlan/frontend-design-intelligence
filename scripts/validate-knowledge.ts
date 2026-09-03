import fs from "node:fs";
import path from "node:path";

interface KnowledgeValidationResult {
  file: string;
  valid: boolean;
  errors: string[];
}

export function validateKnowledge(): KnowledgeValidationResult[] {
  const results: KnowledgeValidationResult[] = [];
  const refDir = path.resolve("knowledge/references/jitter");

  if (fs.existsSync(refDir)) {
    const files = fs.readdirSync(refDir).filter((f) => f.endsWith(".json"));

    for (const file of files) {
      const fullPath = path.join(refDir, file);
      const relativePath = path.relative(".", fullPath);
      const res: KnowledgeValidationResult = {
        file: relativePath,
        valid: true,
        errors: [],
      };

      try {
        const content = fs.readFileSync(fullPath, "utf-8");
        const parsed = JSON.parse(content);

        if (!Array.isArray(parsed)) {
          res.valid = false;
          res.errors.push("Reference file content must be a JSON array");
        } else {
          for (let i = 0; i < parsed.length; i++) {
            const item = parsed[i];
            const requiredFields = [
              "id",
              "name",
              "category",
              "tags",
              "composition",
              "animation_primitives",
              "choreography",
              "why_it_works",
              "use_cases",
              "feasibility",
            ];

            for (const field of requiredFields) {
              if (!(field in item)) {
                res.valid = false;
                res.errors.push(`Item index ${i} ('${item.name || "unnamed"}') missing field '${field}'`);
              }
            }
          }
        }
      } catch (err: any) {
        res.valid = false;
        res.errors.push(`JSON Parse Error: ${err.message}`);
      }

      results.push(res);
    }
  }

  return results;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("=== Validating Reference Knowledge JSONs ===");
  const results = validateKnowledge();
  let hasErrors = false;

  for (const res of results) {
    if (res.valid) {
      console.log(`\x1b[32m[PASS]\x1b[0m ${res.file}`);
    } else {
      console.log(`\x1b[31m[FAIL]\x1b[0m ${res.file}`);
      hasErrors = true;
    }
    for (const err of res.errors) console.log(`   └─ ERROR: ${err}`);
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log("All reference knowledge files validated successfully!");
  }
}
