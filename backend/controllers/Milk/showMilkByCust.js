


const Milk = require("../../models/MilkDetails");
const Otp = require("../../models/Otp")
const showByCust = async (req, res) => {
    try {
        
        const { custID } = req.body;
        const user = await Milk.findOne({custID});
        if (!custID) {
            return res.status(400).json({
                message: "custID is required",
                sucess: false
            });
        }
        
        const milk = await Milk.find({
            custID
        }).select("custID quantity fat snf bill date");

        return res.status(200).json({
            data: milk,
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
module.exports = showByCust;
