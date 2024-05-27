const jwt = require('jsonwebtoken');

const generateTokenSetCookie = (userId, res)=>{
    const token = jwt.sign({userId})
}