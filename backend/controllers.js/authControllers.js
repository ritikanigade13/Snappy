const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {
  res.send("logged In");
};
const logout = async (req, res) => {
  res.send("logout");
};
const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passsword do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //profile picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if(newUser){
    await newUser.save();
    return res.status(200).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
}else{
    res.status(400).json({error:"Invalid user data"});
}
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { loginUser, logout, signUp };
