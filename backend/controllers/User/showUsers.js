
const User = require("../../models/User.js");

const showUsers = async(req,res)=>{
    try{
       
        const user = await User.find().select("name email phone_no address");

        return res.status(201).json({
            data:user,
            sucess:true
        })
    }
    catch(err){
        return res.status(409).json({
            message:err.message,
            sucess:false
        })
    }
}
module.exports = showUsers;
