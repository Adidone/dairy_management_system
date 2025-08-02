


const Milk = require("../../models/MilkDetails");

const showByEmp = async (req, res) => {
    try {

        const { empID } = req.body;
        if (!empID) {
            return res.status(400).json({
                message: "empID is required",
                success: false
            });
        }

        const milk = await Milk.find({
            empID
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
module.exports = showByEmp;
