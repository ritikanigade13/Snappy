const express = require("express");
const protectRoute = require("../middlewares/protectRoute");
const { getUsersForSidebar } = require("../controllers.js/userController");
const router = express.Router();


router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;
