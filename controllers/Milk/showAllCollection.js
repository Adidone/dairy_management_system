

const Milk = require("../../models/MilkDetails");

const showCollection = async(req,res)=>{
    try{
       
        const milk = await Milk.find().select("custID quantity fat rate date status");
        if(!milk){
            return res.status(509).json({
                message:"Data not found",
                sucess:false
            })
        }

        return res.status(201).json({
            data:milk,
            sucess:true
        })
    }
    catch(err){
        return res.status(409).json({
            message:err.message,
            sucess:false
        })
    }
}
module.exports = showCollection;
