const mongoose = require('mongoose');

const conn = async(rq,res)=>{
    const MONGO_DB_URI = process.env.MONGO_DB_URI;
try {
   await mongoose.connect(MONGO_DB_URI);
    console.log("Connected to MongoDb");
   
} catch (error) {
    console.log("Error connecting to MongoDb",error.message);
}
}

module.exports = conn;