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
  const saludoServer = "Hola desde el servidor";
  const arregloServer = [6, 7, 8, 9, 10, 11, 12, 13];
  res.render("main", {
    saludoServer: saludoServer,
    arregloServer,
    arregloServer,
    showList: true,
  });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
