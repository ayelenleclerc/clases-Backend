const path = require("path");
const { execFile } = require("child_process");

execFile(path.resolve(__dirname, "./open_finder.bash"), (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
