const fs = require("fs");

try {
  fs.writeFileSync("./fyh.txt", "26/08/2022 - 09:45hs", "utf8");
} catch (e) {
  console.log("Failed to writeFileSync");
}
console.log(fs.readFileSync("./fyh.txt", "utf-8"));
// consultar/ver throw error no lo entendi.
