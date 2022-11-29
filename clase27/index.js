const minimist = require("minimist");

const args = minimist(process.argv.slice(2), {
  alias: {
    m: "modo",
    p: "puerto",
    d: "debug",
  },
  default: {
    modo: "prod",
    puerto: 0,
    debug: false,
  },
});

console.log({
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
  otros: args._,
});
