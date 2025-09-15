
const Otp = require("../../models/Otp")
const OtpVerify = require("../../models/OtpVerify")

const otpSubmit = async (req, res) => {
    try {
        const { custID, type,bill,otp,date } = req.body;
        console.log(otp)
        const otpV = await OtpVerify.findOne({ otp }); 
        console.log(otpV)
        
        if(otpV){
            return res.status(409).json({
                message: "OTP Already found",
                sucess: false
            })
        }
        
        const newOtp = new OtpVerify({
            custID,type,bill,date,otp
        })
        await newOtp.save();

        return res.status(201).json({
            success: true,
            message: "OPT SUBMITTED",
            
        });

    }
    catch (err) {
        res.status(500).json({
            message: err.message,
            sucess: false
        })
    }
}

module.exports = otpSubmit;