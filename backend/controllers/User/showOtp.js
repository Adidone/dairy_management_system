

const Otp = require("../../models/Otp")
const showOtp = async (req, res) => {
    try {
        
        const { custID } = req.body;
        const user = await Otp.findOne({custID});
        if (!user) {
            return res.status(400).json({
                message: "custID is required",
                sucess: false
            });
        }
        const otp = await Otp.find({
            custID
        }).select("custID type quantity bill date otp");

        return res.status(200).json({
            data: otp,
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
module.exports = showOtp;
