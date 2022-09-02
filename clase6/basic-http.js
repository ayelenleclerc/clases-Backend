const http = require("http");

const PORT = process.env.PORT || 8080;
//createServer
const server = http.createServer((req, res) => {
  console.log("El cliente realizo una petición");
  console.log(req.url, req.method);
  if (req.url === "/" && req.method === "GET") {
    res.end("Soy la pagina de inicio");
  } else if (req.url === "/login") {
    res.end("Soy la pagina de login");
  } else {
    res.write("Hola Mundo");
    res.end("Chao");
  }
});

//listen
const connnectedServer = server.listen(PORT, () => {
  console.log("servidor activo, y escuchando el puerto 8080");
});
