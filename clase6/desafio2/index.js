const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

let visitas = 0;
app.get("/", (req, res) => {
  res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>');
});
app.get("/visita", (req, res) => {
  visitas++;
  res.send(`La cantidad de visitas es de: ${visitas}`);
});
app.get("/fyh", (req, res) => {
  res.json({ fyh: new Date().toLocaleString() });
});

const server = app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});

server.on("error", (error) => console.log(error.message));
