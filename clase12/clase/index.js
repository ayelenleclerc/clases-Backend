const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: SocketServer } = require("socket.io");

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const messages = [
  { author: "Juan", text: "¡Hola!,¿Qué tal?" },
  { author: "Pedro", text: "¡Muy bien!,¿Y vos?" },
  { author: "Ana", text: "Genial!" },
];
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

//Routes

//Listen
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

//Socket events

io.on("connection", (socket) => {
  console.log("New client connection established");
  console.log(socket.id);

  socket.emit("messages", [...messages]);
});
