
export const helpCommands = ["--help", "-h", "-help"];

export function showHelp() {
  console.log(`
NeatNode - Node.js backend generator

Usage:
  neatnode <command> [options]

Commands:
  generate, g <type> <name>   Generate a resource

Options:
  --force                     Overwrite existing files
  -h, --help                  Show help
  -v, --version               Show version

Examples:
  neatnode g resource user
  neatnode g resource blog
  neatnode g resource todo --force
`);
}