const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: SocketServer } = require("socket.io");

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = new HttpServer(app);

app.use(express.static("./public"));

const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

const io = new SocketServer(httpServer);

//metodos io: on, escucha events. emit, emite events.
//Desafio 1 y 2
// io.on("connection", (socket) => {
//   console.log(`Nuevo Cliente conectado!`);
//   console.log(socket.id);
//   //   socket.emit("server-message", "Este es un mensaje desde el servidor!");

//   socket.on("message", (data) => {
//     io.emit("server-message", data);
//   });
// });

//DESAFIO 3
const messages = [];
const users = [];
const colors = ["orange", "yellow", "green", "pink", "purple"];
let colorIndex = 0;

// Sockets Events
io.on("connection", (socket) => {
  if (colorIndex > colors.length - 1) {
    colorIndex = 0;
  }
  users.push({ id: socket.id, color: colors[colorIndex] });
  colorIndex++;

  console.log("Nuevo cliente conectado!");

  socket.emit("messages", messages);

  socket.on("message", (data) => {
    const user = users.find((user) => user.id === socket.id);
    messages.push({ id: socket.id, message: data, color: user.color });
    io.emit("messages", messages);
  });
});
