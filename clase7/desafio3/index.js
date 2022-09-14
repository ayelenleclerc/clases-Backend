const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

let frase = "Frase inicial";

app.use(express.json());

app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

app.get("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const palabras = frase.split(" ");
  if (isNaN(+pos))
    return res.status(400).json({ error: "El parámetro debe ser un número" });
  if (+pos < 1 || pos > palabras.length)
    return res.status(400).json({ error: "El parámetro está fuera de rango" });
  res.json({ palabra: palabras[+pos - 1] });
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  if (!palabra)
    return res.status(400).json({ error: "El campo 'palabra' es requerido" });
  const palabras = frase.split(" ");
  palabras.push(palabra);
  frase = palabras.join(" ");
  res.json({ agregada: palabra, pos: palabras.length });
});

app.put("/api/palabras/:pos", (req, res) => {
  const { palabra } = req.body;
  const { pos } = req.params;
  if (!palabra)
    return res.status(400).json({ error: "El campo 'palabra' es requerido" });
  if (isNaN(+pos))
    return res.status(400).json({ error: "El parámetro debe ser un número" });
  const palabras = frase.split(" ");
  if (+pos < 1 || pos > palabras.length)
    return res.status(400).json({ error: "El parámetro está fuera de rango" });
  const palabraAnterior = palabras[+pos - 1];
  palabras[+pos - 1] = palabra;
  frase = palabras.join(" ");
  res.json({ actualizada: palabra, anterior: palabraAnterior });
});

app.delete("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const palabras = frase.split(" ");
  if (+pos < 1 || pos > palabras.length)
    return res.status(400).json({ error: "El parámetro está fuera de rango" });
  const palabraEliminada = palabras.splice(+pos - 1, 1)[0];
  frase = palabras.join(" ");
  res.json({ eliminada: palabraEliminada });
});

const server = app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});

server.on("error", (error) => console.log(error.message));
