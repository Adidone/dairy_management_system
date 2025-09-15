
const Employe = require("../../models/Employe.js");

const showEmp = async(req,res)=>{
    try{
       
        const emp = await Employe.find().select("empID name email phone_no address");

        return res.status(201).json({
            data:emp,
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
module.exports = showEmp;
