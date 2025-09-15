


const Milk = require("../../models/MilkDetails");

const showByDate = async (req, res) => {
    try {

        const { date } = req.body;
        if (!date) {
            return res.status(400).json({
                message: "Date is required",
                success: false
            });
        }

        const milk = await Milk.find({
            date
        }).select("custID quantity fat rate empID date");

        return res.status(201).json({
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
module.exports = showByDate;
