const mongoose = require("mongoose");

const Mongoose = require("mongoose")
const localDB = `mongodb://localhost:27017/sam`
const connectDB = async () => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
}
module.exports = connectDB






module.exports = connectDB