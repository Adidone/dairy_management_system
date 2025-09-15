const OtpVerify = require("../../models/OtpVerify");
const MilkDetails = require("../../models/MilkDetails");
const Otp = require("../../models/Otp");


const checkOtp = async (req, res) => {
    try {
        const { custID, type, otp, bill, date } = req.body;
        const check = await OtpVerify.findOne({ custID, type, otp, bill, date });

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        if (!check) {
            await MilkDetails.findOneAndUpdate(
                { custID, date: { $gte: startOfDay, $lte: endOfDay }, type },
                { status: "failed" },
                { new: true }
            )
            await OtpVerify.findOneAndDelete(
                { custID, date: { $gte: startOfDay, $lte: endOfDay }, type },
                { new: true }
            )   

            return res.status(509).json({
                message: "Not Found",
                sucess: false
            })
        }

        await MilkDetails.findOneAndUpdate(
            { custID, type, date: { $gte: startOfDay, $lte: endOfDay } },
            { status: "Verified" },
            { new: true }
        )
        await Otp.findOneAndDelete(
            { custID, type, date: { $gte: startOfDay, $lte: endOfDay }},
            {new:true}
        )
        await OtpVerify.findOneAndDelete(
            { custID, type, otp, bill, date },
            { new: true }
        )

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
