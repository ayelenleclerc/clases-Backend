const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const saludoServer = "Hola desde el servidor";
  const arregloServer = [6, 7, 8, 9, 10, 11, 12, 13];
  res.render("index", { showSaludo: true, saludoServer, arregloServer });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
