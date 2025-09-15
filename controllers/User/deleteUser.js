const User = require("../../models/User.js");
const deleteUser = async(req,res) =>{
    try{
        const{custID} = req.body;
        const deleted = await User.findOneAndDelete({custID});
        if(!deleted){
            return res.status(400).json({
                message:"User not deleted",
                sucess:false
            })
        }

        return res.status(201).json({
            message:"User Deleted sucessfully",
            sucess:true
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = deleteUser;