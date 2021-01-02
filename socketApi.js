var socket_io = require("socket.io");
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on("connection", function (socket) {
  console.log("A user connected");
  socketApi.chatUniqueId = socket.id;

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

socketApi.sendNotification = function () {
  io.sockets.emit("hello", { msg: "Hello World!" });
};

socketApi.getChatUniquId = function () {
  return socketApi.chatUniqueId;
};

module.exports = socketApi;
