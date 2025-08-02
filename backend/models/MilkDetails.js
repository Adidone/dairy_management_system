
const mongoose = require("mongoose");

const milkSchema = new mongoose.Schema({
    custID:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    fat:{
        type:Number,
        required:true
    },
    rate:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    empID:{
        type:String,
        required:true
    }
});

const Milk = mongoose.model("Milk",milkSchema);
module.exports = Milk;