

const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    custID:{
        type:String,
    },
    empID:{
        type:String
    },
    msg:{
        type:String,
    },
    reply:{
        type:String
    }
})

const Reply = mongoose.model("Reply",replySchema);
module.exports = Reply;