
const Milk = require("../../models/MilkDetails");

const editCollection = async (req, res) => {
    try {
        const { custID, quantity, fat, rate } = req.body;

        const updatedMilk = await Milk.findOneAndUpdate(
            { custID },
            { quantity, fat, rate },
            { new: true }
        )

        if (!updatedMilk) {
            return res.status(404).json({
                message: "Milk record not found for given custID",
                success: false
            });
        }

        return res.status(200).json({
            message: "Milk record updated successfully",
            success: true,
            data: updatedMilk
        });


    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            sucess: false
        })
    }
}

module.exports = editCollection;