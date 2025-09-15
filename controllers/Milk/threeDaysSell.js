
const Milk = require("../../models/MilkDetails");
const mongoose = require("mongoose");

const threeDaysSell = async (req, res) => {
    try {
        const first = new Date().toISOString().split("T")[0];

        const sec = new Date();
        sec.setDate(sec.getDate() - 1);
        const second = sec.toISOString().split("T")[0];

        const thi = new Date();
        thi.setDate(thi.getDate() - 2);
        const third = thi.toISOString().split("T")[0];

        const d1 = await Milk.find({ date: first });
        const d2 = await Milk.find({ date: second });
        const d3 = await Milk.find({ date: third });

        if (d1.length === 0 && d2.length === 0 && d3.length === 0) {
            console.log("1");
            
            return res.status(404).json({
                day1: first,
                day2: second,
                day3: third,
                sucess: false
            })
        }
        let sell_d1 = 0;
        for (let i = 0; i < d1.length; i++) {
            sell_d1 = sell_d1 + d1[0].quantity;
        }
        let sell_d2 = 0;
        for (let i = 0; i < d2.length; i++) {
            sell_d2 = sell_d2 + d2[0].quantity;
        }
        let sell_d3 = 0;
        for (let i = 0; i < d3.length; i++) {
            sell_d3 = sell_d3 + d3[0].quantity;
        }

        if(d1.length===0 && d2.length===0){
            console.log("2");
            return res.status(404).json({
                sucess:false,
                day1: first,
                day2: second,
                day3: third,
                sell1:0,
                sell2:0,
                sell3:sell_d3
            })
        }
        else if(d2.length===0 && d3.length===0){
            console.log("3");
            return res.status(404).json({
                sucess:false,
                day1: first,
                day2: second,
                day3: third,
                sell1:sell_d1,
                sell2:0,
                sell3:0
            })
        }
        else if(d1.length===0 && d3.length===0){
            console.log("4");
            return res.status(404).json({
                sucess:false,
                day1: first,
                day2: second,
                day3: third,
                sell1:0,
                sell2:sell_d2,
                sell3:0
            })
        }
        console.log("5");
        return res.status(200).json({
            message: "Last three days collection fetched sucessfully",
            sucess: true,
            day1: first,
            sell1: sell_d1,
            day2: second,
            sell2: sell_d2,
            day3: third,
            sell3: sell_d3
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Eroor",
            sucess: false
        })
    }
}

module.exports = threeDaysSell;