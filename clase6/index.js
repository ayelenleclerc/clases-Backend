const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Esta es la pagina de inicio");
});

app.get("/login", (req, res) => {
  res.send("Esta es la pagina de login");
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
connectedServer.on("error", (error) => {
  console.log(error.message);
});
