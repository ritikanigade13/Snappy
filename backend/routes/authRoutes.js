const express = require('express');
const router = express.Router();
const {signUp,logout,loginUser} = require('../controllers.js/authControllers')
router.post("/signup", signUp);
router.post("/login",loginUser);
router.post("/logout",logout);

module.exports = router;