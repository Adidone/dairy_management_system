const Milk = require("../../models/MilkDetails");
const User = require("../../models/User");
const express = require("express");
const mongoose = require("mongoose");
const todayCollection = async (req, res) => {
    try {
        const today = new Date().toISOString().split("T")[0];
    
        const collections = await Milk.find({ date: today });
        if (collections.length === 0) {
            return res.status(404).json({
                message: "No milk collections found for today",
                success: false
            });
        }
        return res.status(200).json({
            message: "Today's milk collections retrieved successfully",
            success: true,
            data: collections
        });
    }
    catch (err) {
        console.log("Error in today's collection =>", err);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = todayCollection;