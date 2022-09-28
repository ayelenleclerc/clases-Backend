const socket = io();

const chat = document.getElementById("chat");

socket.on("messages", (data) => {
  console.log(data);
  const html = data
    .map((message) => {
      return `<span>
        <strong>${message.author}:
        </strong> ${message.text}
        </span> <br/>`;
    })
    .join("\n");
  chat.innerHTML = html;
});
