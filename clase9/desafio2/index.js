const express = require("express");
const fs = require("fs/promises");

const PORT = 8080;

const app = express();

app.engine("cte", async (path, option, callback) => {
  const content = await fs.readFile(path, "utf8");
  try {
    const html = content
      .replace("^^titulo$$", `${option.titulo}`)
      .replace("^^mensaje$$", `${option.mensaje}`)
      .replace("^^autor$$", `${option.autor}`)
      .replace("^^version$$", `${option.version}`);
    return callback(null, html);
  } catch (err) {
    return callback(err);
  }
});
app.set("views", "./views");
app.set("view engine", "cte");

app.get("/cte1", (req, res) => {
  res.render("plantilla1", {
    titulo: "Clase de plantillas",
    mensaje: "Clase de plantillas, aprendiendo a usar plantillas",
    autor: "Ayelen Leclerc",
    version: "1.0.0",
  });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.error("Error: ", error);
});
