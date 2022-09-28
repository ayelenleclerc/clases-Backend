const socket = io(); //es la coneccion con el backend
//desafio 1

// socket.on("server-message", (data) => {
//   console.log(`Recibí un mensaje desde el server ${data}`);
// });

// desafio 2
// const input = document.getElementById("chat-input");

// input.addEventListener("input", (event) => {
//   event.preventDefault();
//   socket.emit("message", input.value);
// });

// socket.on("server-message", (data) => {
//   document.querySelector("#chat-box-message").innerHTML = data;
// });

// desafio 3

const input = document.querySelector("#chat-input");
const button = document.querySelector(".btn-chat");
const chatBox = document.querySelector("#chat-box-container");
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    button.click();
  }
});

button.addEventListener("click", () => {
  socket.emit("message", input.value);
  input.value = "";
});

socket.on("messages", (messages) => {
  const htmlMessages = messages.map((data) => {
    const html = `<div class="messages-container">
      <span class="span-messagesPrint">
        User <strong style="color: ${data.color}; font-weight: 700; ">${data.id}</strong> says <strong style="color: ${data.color}; font-weight: 700; ">=></strong> 
      </span>
      <span class="span-messagesPrint">${data.message}</span>
    </div>`;
    return html;
  });
  const messagesPrint = htmlMessages.join("\n");
  chatBox.innerHTML = messagesPrint;
});
