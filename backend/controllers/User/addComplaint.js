

const User = require("../../models/User");
const Complaint = require("../../models/Complaint");
// const bcrypt = require("bcrypt");
const addComplaint = async (req, res) => {
    try{
 
        let{custID,msg} = req.body;
        
        const user = await User.findOne({custID}); 
 
        if(!custID){
            return res.status(409).json({
                message: "Farmer with this ID is not present",
                success: false      
            });
        }
        
        const newComplaint = new Complaint({
            custID,msg
        });
        await newComplaint.save();
        return res.status(201).json({   
            message: "Complaint Added SucessFully",
            success: true
        });
    }
    catch(err) {
        res.status(500).json({
            message: err.message,
            success: false
        });
    }   
}

module.exports = addComplaint;