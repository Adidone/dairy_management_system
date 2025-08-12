const express = require('express');
const mongoose = require('mongoose');
const Milk = require('../../models/MilkDetails');
const User = require("../../models/User");

const topMilkSellers = async (req, res) => {
    try {
        const collection = await Milk.find().select("custID empID quantity");
        
        console.log(collection[0].quantity);
        const milkSellers = [];
        const topEmployees = [];
        for (let i = 0; i < collection.length; i++) {
            const seller = collection[i];
            const existingSeller = milkSellers.find(s => s.custID === seller.custID);
            if (existingSeller) {
                existingSeller.quantity += seller.quantity;
            } else {
                let user = await User.findOne({custID:seller.custID}).select("name");
                milkSellers.push({custID:seller.custID, quantity:seller.quantity, name:user.name});
            }
        }

        milkSellers.sort((a,b) => b.quantity - a.quantity);

        console.log(milkSellers);

        return res.status(200).json({
            sucess:true,
            data:milkSellers,
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