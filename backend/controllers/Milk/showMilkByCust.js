


const Milk = require("../../models/MilkDetails");

const showByCust = async (req, res) => {
    try {

        const { custID } = req.body;
        if (!custID) {
            return res.status(400).json({
                message: "custID is required",
                success: false
            });
        }

        const milk = await Milk.find({
            custID
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
module.exports = showByCust;
