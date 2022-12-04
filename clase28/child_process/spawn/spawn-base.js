const { spawn } = require("child_process");
const { stdout, stderr } = require("process");

const childProcess = spawn("find", ["."]);

childProcess.stdout.on("data", (data) => {
  console.log("Stdout =>", data);
});

childProcess.stderr.on("data", (data) => {
  console.log("Stderr =>", data);
});
