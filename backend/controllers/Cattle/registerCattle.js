
const Cattle = require("../../models/Cattle.js");
// const bcrypt = require("bcrypt");
const registerCattle = async (req, res) => {
    try{
 
        let{cattleID,birth,type,breed} = req.body;
        
        const cattle = await Cattle.findOne({cattleID}); 
 
        if(cattle){
            return res.status(409).json({
                message: "Cattle Already registered with this ID",
                success: false      
            });
        }
        
        const newCattle = new Cattle({
            cattleID,birth,type,breed
        });
        await newCattle.save();
        return res.status(201).json({   
            message: "Cattle registered successfully",
            success: true
        });
    }
    catch(err) {
        res.status(500).json({
            message: err.message,
            success: false
        });
    }   
}

module.exports = registerCattle;