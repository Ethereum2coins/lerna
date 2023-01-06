import type { CommandModule } from "yargs";

/**
 * @see https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
 */
const command: CommandModule = {
  command: "info",
  describe: "Prints debugging information about the local environment",
  builder(yargs) {
    return yargs;
  },
  handler(argv) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("./command")(argv);
  },
};

module.exports = command;
