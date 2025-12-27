const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connected Successfully")
    })
    .catch((err) => {
        console.log("Connection Failed")
    })
}

module.exports = connectDB;