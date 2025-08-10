
const mongoose = require('mongoose');

const cattleSchema = new mongoose.Schema({
    cattleID : {
        type:String,
        required:true,
        unique:true
    },
    birth : {
        type:Date,
        required:true
    },
    type : {
        type:String,
        required:true,
    },
    breed : {
        type:String,

    }
})

const Cattle = mongoose.model("Cattle",cattleSchema);
module.exports = Cattle;