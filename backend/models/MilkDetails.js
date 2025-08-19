
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
    type:{
        type:String,
        required:true,
        enum:["cow","buffalow"], // Assuming these are the types of milk
        default:"cow"
    },
    fat:{
        type:Number,
        required:true
    },
    snf:{
        type:Number,
        required:true
    },
    bill:{
        type:Number,
    },
    date:{
        type:Date,
        required:true,
    },
    empID:{
        type:String,
        required:true
    },
    status:{
        type: String,
        enum: ['pending','completed','failed','ongoing'],
        default: 'pending',
    },
    collected:{
        type:Boolean,
        default:false
    }
});

const Milk = mongoose.model("Milk",milkSchema);
module.exports = Milk;