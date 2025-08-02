const Milk = require("../../models/MilkDetails");
const deleteCollection = async(req,res) =>{
    try{
        const{custID} = req.body;
        const deleted = await Milk.findOneAndDelete({custID});
        if(!deleted){
            return res.status(400).json({
                message:"Collection not deleted",
                sucess:false
            })
        }

        return res.status(201).json({
            message:"Collection Deleted sucessfully",
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

module.exports = deleteCollection;