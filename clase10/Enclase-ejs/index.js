const path = require("path");
const rutasApi = require("./hecho en clase/routers/index");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("views", "./views");
app.set("view engine", "pug");

// Middlewares
app.use(express.static(path.resolve(__dirname, "./public")));

// Rutas
app.use("/api", rutasApi);

app.get("/", (req, res) => {
  res.render("main", {});
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
