export const showUnknownCommand = (command: string) => {
  console.error(`❌ Unknown command: ${command}`);
  console.log("Run `neatnode --help` to see available commands.");
};