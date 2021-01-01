var express = require("express");
var router = express.Router();

var socketApi = require("../socketApi");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

socketApi.io.on("connection", (socket) => {
  console.log("Socket.io from index.js");
  socket.on("chat message", function (msg) {
    console.log("Your msg", msg);
    socketApi.io.emit("chat message", msg);
  });
});

module.exports = router;
