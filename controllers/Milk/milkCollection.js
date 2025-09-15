const Milk = require("../../models/MilkDetails");
const User = require("../../models/User");
const Emp = require("../../models/Employe")
const Otp = require("../../models/Otp")
const OtpVerify = require("../../models/OtpVerify")
const milkCollection = async (req, res) => {
    try {

        // const indexes = await Milk.collection.getIndexes();

        // await Milk.collection.dropIndex("custID_1");
        // console.log(indexes);
        // await Otp.collection.dropIndex("date_1");
        // const indexes = await Otp.collection.getIndexes()
        // console.log("index",indexes);
        function generateOTP(length = 6) {
            let otp = "";
            for (let i = 0; i < length; i++) {
                otp += Math.floor(Math.random() * 10); // random 0-9 digit
            }
            return otp;
        }

        let { custID, type, quantity, fat, snf, bill, date, empID, status, collected } = req.body;

        if (type == "cow") {
            bill = (fat / 100 * quantity) * 50 + (snf / 100 * quantity) * 30;
        }
        else if (type == "buffalow") {
            bill = (fat / 100 * quantity) * 60 + (snf / 100 * quantity) * 40;
        }



        const emp = await Emp.findOne({ empID });
        if (!emp) {
            return res.status(409).json({
                message: "This employe is not available",
                sucess: false
            })
        }

        const user = await User.findOne({ custID });
        if (!user) {
            return res.status(409).json({
                message: "Farmer is not registered",
                sucess: false
            })
        }

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const done = await Milk.findOne({
            custID,
            type,
            date: { $gte: startOfDay, $lte: endOfDay }
        })
        if (done) {
            return res.status(400).json({
                message: `Todays ${type} milk Already collected for ${custID}`,
                sucess: false
            })
        }
        const newDate = new Date();


        console.log(newDate)
        bill = parseFloat(bill.toFixed(2));
        const otp = generateOTP();
        const newOtp = new Otp({
            custID, type, bill, date: newDate, otp
        })

        const newCollection = new Milk({
            custID, type, quantity, fat, snf, bill, date: new Date(), empID, status, collected
        })


        await newCollection.save();
        await newOtp.save();
        return res.status(509).json({
            message: "Milk collected sucessfully",
            sucess: true
        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            sucess: false
        })
    }
}

module.exports = milkCollection;