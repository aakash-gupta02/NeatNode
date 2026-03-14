#!/usr/bin/env node
import inquirer from "inquirer";
import templates from "./config/templates.js";
import { createProject } from "./actions/createProject.js";

async function main() {
  console.log("\n🚀 Welcome to NeatNode CLI!\n");

  // STEP 1 — Project Name
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter project folder name:",
      default: "my-app",
      validate: (v) => v.trim() !== "" || "Project name cannot be empty.",
    },
  ]);

  // STEP 2 — Choose Language
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Select language:",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  const langKey = language === "JavaScript" ? "js" : "ts";
  const templateList = templates[langKey];

  // STEP 3 — Choose Template
  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Choose a template:",
      choices: templateList.map((t) => t.name),
    },
  ]);

  const chosen = templateList.find((t) => t.name === template);

  // STEP 4 — CRUD Optional (only for some templates)
  let includeCrud = false;
  let isModular = chosen.isModular || false;
  let crudName = "";

  if (chosen.name === "Basic Express") {
    const { includeCrud: answer } = await inquirer.prompt([
      {
        type: "confirm",
        name: "includeCrud",
        message: "Include example Todo CRUD?",
        default: true,
      },
    ]);
    includeCrud = answer;
    crudName = "todo";
  }

  if (chosen.name === "REST API") {
    const { includeCrud: answer } = await inquirer.prompt([
      {
        type: "confirm",
        name: "includeCrud",
        message: "Include example User CRUD?",
        default: true,
      },
    ]);
    includeCrud = answer;
    crudName = "user";
  }

  if (chosen.name === "Basic Express (TS)") {
    const { includeCrud: answer } = await inquirer.prompt([
      {
        type: "confirm",
        name: "includeCrud",
        message: "Include example Todo CRUD?",
        default: true,
      },
    ]);
    includeCrud = answer;
    crudName = "todo";
  }
  if (chosen.name === "REST API (TS)") {
    const { includeCrud: answer } = await inquirer.prompt([
      {
        type: "confirm",
        name: "includeCrud",
        message: "Include example Auth CRUD?",
        default: true,
      },
    ]);
    includeCrud = answer;
    crudName = "auth";
    isModular = chosen.isModular;
  }

  // STEP 5 — Create Project (Remote download logic inside)
  await createProject({
    projectName,
    repoPath: chosen.repoPath,
    includeCrud,
    crudName,
    langKey,
    isModular,
  });

  
  console.log(`\n✅ Project "${projectName}" created successfully using "${chosen.name}".\n`);

  console.log("Next steps:");
  console.log(`  cd ${projectName}`);
  console.log("  npm install");
  console.log("  npm run dev\n");

  console.log("🎉 Happy Coding!\n");



}

main().catch((err) => {
  console.error("❌ Error:", err.message || err);
});
