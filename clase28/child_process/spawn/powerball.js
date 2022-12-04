const { spawn } = require("child_process");

const childProcess = spawn("node", ["numeros"]);

childProcess.stdout.on("data", (data) => {
  console.log("PowerBall: ", data.toString().trim());
});

process.stdin.on("data", (data) => {
  console.log("Buena suerte...");
  process.exit();
});
