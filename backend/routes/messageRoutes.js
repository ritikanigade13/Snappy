const express = require("express");
const { sendMessage,getMessages } = require("../controllers.js/messageController.js");
const protectRoute = require("../middlewares/protectRoute.js");
const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
