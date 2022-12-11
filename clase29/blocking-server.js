const express = require("express");
const args = require("minimist")(process.argv.slice(2), {
  default: {
    PORT: 3000,
  },
  alias: {
    p: "PORT",
  },
});

console.log("estoy en un proceso secundario");
const PORT = args.PORT;
let visitas = 0;

const app = express();

const delay = (duration) => {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {} // Event loop is blocked
};

app.get("/", (req, res) => {
  res.send(`No. de visitas => ${++visitas}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Ding ding ding!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
