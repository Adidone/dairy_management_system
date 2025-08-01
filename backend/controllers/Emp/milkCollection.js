const Milk = require("../../models/MilkDetails");
const User = require("../../models/User");
const milkCollection = async(req,res)=>{
    try{
        const{custID,quantity,fat,rate,date,employe} = req.body;

        const emp = await User.findOne({empID:employe});
        if(!emp){
            return res.status(409).json({
                message:"This employe is not available",
                sucess:false
            })
        }
        

        const milk = await Milk.findOne({custID});
        if(milk){
            return res.status(409).json({
                message:"Milk is already collected from this customer",
                sucess:false
            })
        }

        const newCollection = new Milk({
            custID,quantity,fat,rate,date,employe
        })

        await newCollection.save();

        return res.status(509).json({
            message:"Milk collected sucessfully",
            sucess:true
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = milkCollection;