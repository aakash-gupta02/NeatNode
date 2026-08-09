#!/usr/bin/env node
import inquirer from "inquirer";

import { generate } from "../../modules/generate/command.js";
import { createProject } from "../../modules/starter/service.js";
import templates from "../../modules/starter/registry/templates.js";
import type { GeneratorType, LangKey } from "../../shared/types/Domain.js";
import type { StarterTemplate } from "../../shared/types/StarterTemplate.js";
import { parseGeneratorType } from "./parsers/generatorType.js";

async function main(): Promise<void> {
  console.log("\n🚀 Welcome to NeatNode CLI!\n");

  const { projectName } = await inquirer.prompt<{
    projectName: string;
  }>([
    {
      type: "input",
      name: "projectName",
      message: "Enter project folder name:",
      default: "my-app",
      validate: (value) =>
        value.trim() !== "" || "Project name cannot be empty.",
    },
  ]);

  const { language } = await inquirer.prompt<{
    language: "JavaScript" | "TypeScript";
  }>([
    {
      type: "list",
      name: "language",
      message: "Select language:",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  const langKey: LangKey = language === "JavaScript" ? "js" : "ts";

  const templateList = templates[langKey];

  const { template } = await inquirer.prompt<{
    template: StarterTemplate;
  }>([
    {
      type: "list",
      name: "template",
      message: "Choose a template:",
      choices: templateList.map((template) => ({
        name: template.name,
        value: template,
      })),
    },
  ]);

  let repoPath: string;
  let isModular = template.isModular ?? false;

  if (template.architecture) {
    const { architecture } = await inquirer.prompt<{
      architecture: "mvc" | "modular";
    }>([
      {
        type: "list",
        name: "architecture",
        message: "Select architecture:",
        choices: ["mvc", "modular"],
      },
    ]);

    isModular = architecture === "modular";
    repoPath = template.architecture[architecture];
  } else {
    repoPath = template.repoPath;
  }

  let includeCrud = false;
  let crudName = "";

  if (template.crud) {
    const { includeCrud: answer } = await inquirer.prompt<{
      includeCrud: boolean;
    }>([
      {
        type: "confirm",
        name: "includeCrud",
        message: template.crud.message,
        default: true,
      },
    ]);

    includeCrud = answer;
    crudName = template.crud.resource;
  }

  await createProject({
    projectName,
    repoPath,
    includeCrud,
    crudName,
    langKey,
    isModular,
    tempConfig: template.config,
  });

  console.log(
    `\n✅ Project "${projectName}" created successfully using "${template.name}".\n`,
  );

  console.log("Next steps:");
  console.log(`  cd ${projectName}`);
  console.log("  npm install");
  console.log("  npm run dev\n");

  console.log("🎉 Happy Coding!\n");
}

async function run() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");

  if (args[0] === "g" || args[0] === "generate") {
    return generate({
      type: parseGeneratorType(args[1]),
      name: args[2],
      force,
    });
  }

  return main();
}

run().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);

  console.error(`❌ ${message}`);
  process.exit(1);
});
