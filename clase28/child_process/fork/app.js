const express = require("express");
const { fork } = require("child_process");

let visitas = 0;

const app = express();

app.get("/calcular", (req, res) => {
  const computo = fork("./computo.js");
  computo.send("Start");
  computo.on("message", (data) => {
    res.json({ resultado: data });
  });
});

app.get("/", (req, res) => {
  res.send(`No. Visitas => ${++visitas}`);
});

app.listen(8080);
