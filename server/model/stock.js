const Mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Mongoose.Schema({
    mat: {
        type: String,
        required: true,
    },
    broom: {
        type: String,
        unique: true,
        required: true,
    },
    tiles: {
        type: String,
        required: true,
    },

});


const Stock = Mongoose.model("Stock", StockSchema);

module.exports = mongoose.model('Stock', stockSchema)

