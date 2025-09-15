
const Emp = require("../../models/Employe");

const editEmp = async (req, res) => {
    try{
        const{empID,name,email,phone_no,address} =req.body;
        const editEmploye = await Emp.findOneAndUpdate(
            {empID},
            {name,email,phone_no,address},
            {new:true,runValidators:true},
        )
        if(!editEmploye){
            return res.status(400).json({
                message:"Emp not edited",
                sucess:false
            })
        }
        return res.status(201).json({
            message:"Emp Edited sucessfully",
            sucess:true,
            data:editEmploye
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = editEmp;