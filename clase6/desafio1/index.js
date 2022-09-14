const http = require("http");

const PORT = process.env.PORT || 8080;

console.log("HORA ACTUAL => ", new Date());
const server = http.createServer((req, res) => {
  const actualHour = new Date().getHours();
  res.writeHead(200, { "Content-Type": "text/plain", charset: "utf-8" });
  if (actualHour >= 6 && actualHour <= 12) res.end("Buenos dias!");
  else if (actualHour >= 13 && actualHour <= 19) res.end("Buenas tardes!");
  else res.end("Buenas noches!");
});

server.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});
