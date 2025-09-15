
const mongoose = require("mongoose");

const otpVerifySchema = new mongoose.Schema({
    custID: { 
        type: String,
    },
    type:{
        type:String,
        enum:["cow","buffalow"], // Assuming these are the types of milk
        default:"cow"
    },
    otp: { 
        type: String, 
        required: true 
    },
    bill:{
        type:Number,
    },
    date: {
         type: Date,
         default:Date.now
    } // 300 seconds = 5 min
});
const OtpVerify = mongoose.model("OtpVerify", otpVerifySchema);
module.exports = OtpVerify;

