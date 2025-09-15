const OtpVerify = require("../../models/OtpVerify")

const showVeriOtp = async(req,res)=>{
    try{
       
        const otpV = await OtpVerify.find().select("custID type otp bill date");
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
module.exports = showVeriOtp;
