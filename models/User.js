const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    custID: {
        type: String,
    },
    name: {
        type: String,
        required: true,   
    },
    email: {
        type: String,   
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    phone_no: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        enum:["A","B","C"],
        default:"A",    
    },
    collected: {
        type: Boolean,  
        default: false,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;