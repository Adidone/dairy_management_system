const express = require('express');
const mongoose = require('mongoose');
const Milk = require('../../models/MilkDetails');
const User = require("../../models/User");
const Emp = require("../../models/Employe")

const topMilkSellers = async (req, res) => {
    try {
        const collection = await Milk.find().select("custID empID quantity");
        
        // console.log(collection[1].empID);
        const milkSellers = [];
        const topEmployees = [];
        for (let i = 0; i < collection.length; i++) {
            const seller = collection[i];
            const existingSeller = milkSellers.find(s => s.custID === seller.custID);
            const existingBuyer = topEmployees.find(e => e.empID === seller.empID);
            if (existingSeller) {
                existingSeller.quantity = existingSeller.quantity + seller.quantity;
            } else {
                let user = await User.findOne({custID:seller.custID}).select("name");
                milkSellers.push({custID:seller.custID, quantity:seller.quantity, name:user.name});
            }

            if(existingBuyer){
                existingBuyer.quantity = existingBuyer.quantity + seller.quantity;
            }
            else{
                let emp = await Emp.findOne({empID:seller.empID}).select("name");
                topEmployees.push({empID:seller.empID,quantity:seller.quantity,name:emp.name})
            }
        }

        milkSellers.sort((a,b) => b.quantity - a.quantity);
        topEmployees.sort((a,b) => b.quantity - a.quantity);

        // console.log(milkSellers);
        // console.log(topEmployees)

        return res.status(200).json({
            sucess:true,
            data:milkSellers,
            data1:topEmployees,
            message:"sucess"
        })
    }
    catch (err) {
        console.error(err);
        return res.status(509).json({
            sucess:false,
            message:"false"
        })
    }
}

module.exports = topMilkSellers;