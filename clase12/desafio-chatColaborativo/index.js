const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const { formatMessage } = require("./utils/utils");

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const messages = [];
const users = [];

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

//Routes
app.get("/chat", (req, res) => {
  console.log(users);
  res.sendFile(__dirname + "/public/chat.html");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.send("Username already taken!");
  }
  res.redirect(`/chat?username=${username}`);
});

//Listen
httpServer.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

const botName = "Shut Bot";
//Socket events

io.on("connection", (socket) => {
  console.log("New client connection");

  //Getting all messages
  socket.emit("messages", [...messages]);

  // Welcome to chat
  socket.on("join-chat", (data) => {
    const newUser = {
      id: socket.id,
      username: data.username,
    };
    users.push(newUser);

    //welcome current user
    socket.emit(
      "chat-message",
      formatMessage(null, botName, `Welcome to Shut App!`)
    );
    // Broadcast connection
    socket.broadcast.emit(
      "chat-message",
      formatMessage(null, botName, `${data.username} has joined the chat`)
    );
    // socket.emit("username", data.username);
  });

  //New message
  socket.on("new-message", (data) => {
    const author = users.find((user) => user.id === socket.id);
    const newMessage = formatMessage(socket.id, author.username, data);
    messages.push(newMessage);
    io.emit("chat-message", newMessage);
  });

  // socket.on("disconnect", (socket) => {
  //   console.log("Client disconnected!");
  //   if (socket.id) {
  //     users.filter((user) => user.id !== socket.id)
  //   }

  //     return res.redirect("/login");

  // });
  // socket.broadcast.emit(
  //   "chat-message",
  //   formatMessage(null, botName, `${data.username} has disconnected!`)
  // );
});
