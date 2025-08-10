
const Complaint = require("../../models/Complaint");

const showComplaints = async(req,res)=>{
    try{
       
        const complaint = await Complaint.find();

        return res.status(201).json({
            data:complaint,
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
module.exports = showComplaints;
