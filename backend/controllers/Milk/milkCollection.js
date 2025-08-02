const Milk = require("../../models/MilkDetails");
const User = require("../../models/User");
const Emp = require("../../models/Employe")
const milkCollection = async(req,res)=>{
    try{

        const indexes = await Milk.collection.getIndexes();
     
        // await Milk.collection.dropIndex("employe_1");
        // console.log(indexes);

        const{custID,quantity,fat,rate,date,empID} = req.body;

        const emp = await Emp.findOne({empID});
        if(!emp){
            return res.status(409).json({
                message:"This employe is not available",
                sucess:false
            })
        }
        
        const user = await User.findOne({custID});
        if(!user){
            return res.status(409).json({
                message:"Customer is not registered",
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
            custID,quantity,fat,rate,date,empID
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