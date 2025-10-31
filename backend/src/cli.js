import inquirer from "inquirer";
import { createProject } from "./actions/createProject.js";
import templates from "./config/templates.js";

async function main() {
  console.log("Welcome to NodeNeat CLI!");

    const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "Enter your project folder name:",
      default: "my-app"
    }
  ]);


  const { template } = await inquirer.prompt([
    {
      name: "template",
      type: "list",
      message: "Choose a template:",
      choices: templates.map(t => t.name)
    }
  ]);

  const chosen = templates.find(t => t.name === template);
  await createProject({
    projectName,
    templatePath: chosen.path
  });
}

main();
