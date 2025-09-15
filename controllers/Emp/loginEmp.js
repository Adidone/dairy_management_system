const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Emp = require("../../models/Employe");

require("dotenv").config();

const loginEmp = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const emp = await Emp.findOne({ email });
        

        if(!emp){
            return res.status(409).json({
                message:"Emp not Found with this email ID",
                sucess:false
            })
        }

        const isPassEqual = await bcrypt.compare(password,emp.password);
        console.log(isPassEqual)

        if(!isPassEqual){
            return res.status(409).json({
                message:"Invalid Credential",
                sucess:false
            })
        }

        const jwtToken = jwt.sign(
            {
                email:emp.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'24h'
            }
        )
        return res.status(201).json({
            message:"Login Sucessfully",
            sucess:true,
            jwtToken,
            empEmpID:emp.empID,
            email: emp.email,
            empName: emp.name,
            empAddress: emp.address,
            
        })
    }
    catch(err){
        console.error("Login error:", err);
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = loginEmp;