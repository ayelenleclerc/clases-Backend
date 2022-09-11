/**
 * API REST
 * ARQUITECTURA SERVIDOR/CLIENTE SIN ESTADO
 * CACHEABLE
 *OPERACIONES COMUNES
 * INTERFAZ UNIFORME
 * URI pattern
 * {protocolo}://{hostname}:{port}/{ruta del recursos}?{parámetro de busqueda}
 *
 * http://localhost:8080/?param1=value1&param2=value2
 * puerto estandart http es el 80
 *
 *
 * protocolo websocket
 * ws://localhost:5000/?param1=value1&param2
 *
 *UTILIZACION DE HIPERMEDIOS
 */

const express = require("express");
const { products } = require("./data.js");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

const app = express();

//middlewares

app.use(express.json());

//RUTAS

app.get("/", (req, res, next) => {
  // res.send({ name: "Ayelen" });
  res.json({ name: "Ayelen" });
});

app.get("/products", (req, res, next) => {
  // query params
  console.log(req.query);
  const { precio } = req.query;
  const priceNumber = parseInt(precio);
  const resProducts = products.filter(
    (product) => product.precio < priceNumber
  );

  res.json(resProducts);
});

//parametros de ruta Ej:

app.get("/products/:id", (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  const product = products.find((product) => product.id === Number(id)); //+(id) lo convierte el numero en vez de poner Number(id)
  res.json({ message: "ok" });
});

app.post("/products", (req, res, next) => {
  console.log(req.body);
  const { nombre, descripcion, precio, imagen } = req.body;
  const nuevoProduct = {
    id: products.length + 1,
    nombre,
    descripcion,
    precio,
    imagen,
  };
  products.push(nuevoProduct);
  fs.writeFileSync("./data.js", JSON.stringify(products, null, 2));
  res.json(nuevoProduct);
});

app.delete("/products/:id", (req, res, next) => {
  const { id } = req.params;
  const indiceProduct = products.findIndex(
    (product) => product.id === Number(id)
  );
  if (indiceProduct < 0) {
    res.status(400).send(`Product ${id} not found`);
  }
  const deletedProducts = products.splice(indiceProduct, 1);
  res.json(deletedProducts);
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("eror", (error) => {
  console.log(error.message);
});
