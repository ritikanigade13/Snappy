const jwt = require("jsonwebtoken");

const generateTokenSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent xss attacks
    sameSite:"strict",// prevent forgery attacks
    secure:process.env.NODE_DEV !== "development"
  });
};

module.exports = generateTokenSetCookie;
