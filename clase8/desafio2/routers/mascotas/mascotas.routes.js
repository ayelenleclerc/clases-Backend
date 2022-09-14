const express = require("express");
const { mascotas } = require("../../data/data");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(mascotas);
});

router.post("/", (req, res) => {
  const { nombre, raza, edad } = req.body;
  if (!nombre || !raza || !edad) {
    return res.status(400).json({ error: " Formato del cuerpo incorrecto" });
  }
  const nuevaMascota = {
    id: mascotas.length + 1,
    nombre,
    raza,
    edad,
  };
  mascotas.push(nuevaMascota);
  res.json(nuevaMascota);
});

module.exports = router;
