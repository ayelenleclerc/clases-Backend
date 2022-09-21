const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/datos", (req, res) => {
  res.render("main", req.query);
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
