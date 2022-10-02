// utility functions
const renderMessage = (socketId, data) => {
  const div = document.createElement("div");
  let className;
  let html;
  if (data.id) {
    className =
      socketId === data.id
        ? "my-messages-container"
        : "other-messages-container";
    if (className === "my-messages-container") {
      html = `<div class="my-messages"><span><b>Yo</b> ${data.time}</span><br /><span>${data.text}</span></div>`;
    } else {
      html = `<div class="other-messages"><span><b>${data.username}</b> ${data.time}</span><br /><span>${data.text}</span></div>`;
    }
  } else {
    className = "bot-messages";
    html = `<b>Shut Bot dice: </b><i>${data.text}</i>`;
  }
  div.classList.add(className);
  div.innerHTML = html;
  document.getElementById("messages").appendChild(div);
};
const renderMessages = (data) => {
  const html = data
    .map((elem) => {
      let fragment = `<div class="other-messages-container"><div class="other-messages"><span><b>${elem.username}</b> ${elem.time}</span><br /><span>${elem.text}</span></div></div>`;
      return fragment;
    })
    .join("\n");
  document.getElementById("messages").innerHTML = html;
};

// const renderUsers = (data) => {
//   const html = data
//     .forEach((data) => {
//       `<div class="row px-1">
//                 <span class="text-light">
//                   <div class="d-inline-block mx-2 users-icon"></div>
//                   ${data[i].username}
//                 </span>
//               </div>`;
//     })
//     .join("\n");
//   document.getElementById("users-list").innerHTML = html;
// };

const chatForm = document.getElementById("chat-form");
const textInput = document.getElementById("text-input");
const leaveChat = document.getElementById("leave-chat");

const socket = io();

//join chat
const { username } = Qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

socket.emit("join-chat", { username });

// socket.on("username", (data) => {
//   renderUsers(data);
// });

//Form events listeners
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = textInput.value;
  socket.emit("new-message", msg);
  textInput.value = "";
});

socket.on("chat-message", (data) => {
  renderMessage(socket.id, data);
});

// listenning "messages" events

socket.on("messages", (data) => {
  renderMessages(data);
});

// leaveChat.addEventListener("click", (e) => {
//   e.preventDefault();

//   socket.emit("disconnect", { username });

//   socket.on("disconnect", socketId);
// });
