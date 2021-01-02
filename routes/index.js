var express = require("express");
var router = express.Router();
var socketApi = require("../socketApi");

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require("express-validator");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//get Random chat number id  body("email").isLength({ min: 5 }),
router.get("/getChatId", function (req, res, next) {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  let chatSocketId = socketApi.chatUniqueId;

  console.log("chat socket id", chatSocketId);

  res.render("index", { title: "Express" });
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
