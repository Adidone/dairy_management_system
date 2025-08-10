const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    empID: {
        type:String,
        required:true,
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
        required: true,     
    },
    role: {
        type: String,
        
    }
}, {
    timestamps: true,
});

const Emp = mongoose.model("Emp", empSchema);
module.exports = Emp;