const Otp = require("../../models/Otp");

const showAllOtp = async(req,res)=>{
    try{
       
        const otpV = await Otp.find().select("custID type otp bill date");
        if(!otpV){
            return res.status(509).json({
                message:"Data not found",
                sucess:false
            })
        }

        return res.status(201).json({
            data:otpV,
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
module.exports = showAllOtp;
