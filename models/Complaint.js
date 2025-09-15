
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    custID:{
        type:String,
    },
    empID:{
        type:String
    },
    msg:{
        type:String,
    }
})

const Complaint = mongoose.model("Complaint",complaintSchema);
module.exports = Complaint;