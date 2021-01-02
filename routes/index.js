var express = require("express");
var router = express.Router();
var socketApi = require("../socketApi");
var dbconnection = require("../connections/db_connection");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//get Random chat number id  body("email").isLength({ min: 5 }),
router.get("/getChatId", function (req, res, next) {
  let chatSocketId = socketApi.chatUniqueId;
  console.log("chat socket id", chatSocketId);
  res.json(chatSocketId);
});

socketApi.io.on("connection", (socket) => {
  console.log("Socket.io from index.js");
  socket.on("chat message", function (msg) {
    console.log("Your msg", msg);
    socketApi.io.emit("chat message", msg);
  });

  return socket.id;
});

module.exports = router;
