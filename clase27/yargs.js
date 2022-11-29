const { argv } = require("yargs");
const yargs = require("yargs");

const args = yargs(process.argv.slice(2))
  .alias({
    m: "modo",
    p: "puerto",
    d: "debug",
  })
  .default({
    modo: "prod",
    puerto: 0,
    debug: false,
  });

console.log({
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
  otros: args._,
});

// const args = yargs(process.argv.slice(2)).command(
//   "upload",
//   "uploads a file",
//   (yargs) => {},
//   (argv) => {
//     console.log(" uploading a file now...");
//     console.log("processing");
//     console.log(`${argv.file} uploaded successfully!`);
//   }
// ).argv;

// console.log(args);
