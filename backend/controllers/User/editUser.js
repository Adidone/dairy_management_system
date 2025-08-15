

const User = require("../../models/User");

const editUser = async (req, res) => {
    try{
        const{custID,name,email,phone_no,address} =req.body;
        const editUser = await User.findOneAndUpdate(
            {custID},
            {name,email,phone_no,address},
            {new:true,runValidators:true},
        )
        if(!editUser){
            return res.status(400).json({
                message:"User not edited",
                sucess:false
            })
        }
        return res.status(201).json({
            message:"User Edited sucessfully",
            sucess:true,
            data:editUser
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = editUser;