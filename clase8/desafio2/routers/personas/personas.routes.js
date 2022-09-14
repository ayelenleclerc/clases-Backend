const express = require("express");
const { personas } = require("../../data/data");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(personas);
});

router.post("/", (req, res) => {
  const { nombre, apellido, edad } = req.body;
  if (!nombre || !apellido || !edad) {
    return res.status(400).json({ error: " Formato del cuerpo incorrecto" });
  }
  const nuevaPersona = {
    id: personas.length + 1,
    nombre,
    apellido,
    edad,
  };
  personas.push(nuevaPersona);
  res.json(nuevaPersona);
});

module.exports = router;
