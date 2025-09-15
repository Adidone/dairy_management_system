const Employe = require("../../models/Employe");
const deleteEmp = async(req,res) =>{
    try{
        // const empID = req.params.empID;
        const{empID} = req.body;
        const deleted = await Employe.findOneAndDelete({empID});
        if(!deleted){
            return res.status(400).json({
                message:"Emp not deleted",
                sucess:false
            })
        }

        return res.status(201).json({
            message:"Emp Deleted sucessfully",
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

module.exports = deleteEmp;