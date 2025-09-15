const OtpVerify = require("../../models/OtpVerify");


const checkOtp = async (req, res) => {
    try {
        const { custID, type, otp, bill, date } = req.body;
        const check = await OtpVerify.findOne({custID,type,otp,bill,date});
        if(!check){
            return res.status(509).json({
            message: "Not Found",
            sucess: false
        })
        }

        return res.status(201).json({
            sucess: true
        })
    }
    catch (err) {
        return res.status(409).json({
            message: err.message,
            sucess: false
        })
    }
}
module.exports = checkOtp;
