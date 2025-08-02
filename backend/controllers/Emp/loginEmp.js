const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Emp = require("../../models/Employe");

require("dotenv").config();

const loginEmp = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const emp = await Emp.findOne({ email });
        

        if(!user){
            return res.status(409).json({
                message:"Emp not Found with this email ID",
                sucess:false
            })
        }

        const isPassEqual = await bcrypt.compare(password,user.password);
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
            jwtToken
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = loginEmp;