#!/usr/bin/env node
import inquirer from "inquirer";
import { createProject } from "./actions/createProject.js";
import templates from "./config/templates.js";

async function main() {
  console.log("\n🚀 Welcome to NodeNeat CLI!\n");

  // Step 1: Ask for project name
  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "Enter your project folder name:",
      default: "my-app",
      validate: (input) => input.trim() !== "" || "Project name cannot be empty."
    }
  ]);

  // Step 2: Choose template
  const { template } = await inquirer.prompt([
    {
      name: "template",
      type: "list",
      message: "Choose a template:",
      choices: templates.map((t) => t.name)
    }
  ]);

  const chosen = templates.find((t) => t.name === template);

  // Step 3: Optional prompt if REST API
  let includeCrud = false;
  if (chosen.name === "REST API") {
    const answer = await inquirer.prompt([
      {
        name: "includeCrud",
        type: "confirm",
        message: "Include example User CRUD setup?",
        default: true
      }
    ]);
    includeCrud = answer.includeCrud;
  }

  // Step 4: Create the project
  await createProject({
    projectName,
    templatePath: chosen.path,
    includeCrud
  });

  console.log(`\n✅ Project "${projectName}" created successfully using "${chosen.name}" template.\n`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
});
