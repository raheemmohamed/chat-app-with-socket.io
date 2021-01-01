var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // req.io.sockets.emit("update", "User JS");
  res.send("respond with a resource");
});

module.exports = router;
