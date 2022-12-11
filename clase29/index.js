const express = require("express");
const cluster = require("cluster");
const os = require("os");
const args = require("minimist")(process.argv.slice(2), {
  default: {
    PORT: 8080,
  },
  alias: {
    p: "PORT",
  },
});
// Fork metodo cluster

// node index.js => genera un proceso primario
//=>fork => Worker process (proceso secundarios)
//Round robin => Balanceo de carga.

//Si estoy en el proceso primario => gestionar logica de clusters
//si estoy en un process workers => antender las peticiones (servidor)
if (cluster.isPrimary) {
  console.log("estoy en el proceso primario");
  const NUM_WORKERS = os.cpus().length;
  console.log("Nucleos => " + NUM_WORKERS);
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
  //   cluster.fork();
  //   cluster.fork();
} else {
  console.log("estoy en un proceso secundario");
  const PORT = args.PORT;
  let visitas = 0;

  const app = express();

  const delay = (duration) => {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {} // Event loop is blocked
  };

  app.get("/", (req, res) => {
    res.send(`No. de visitas => ${++visitas}`);
  });

  app.get("/timer", (req, res) => {
    delay(9000);
    res.send("Ding ding ding!");
  });

  app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
  });
}
