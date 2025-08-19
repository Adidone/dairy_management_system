const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/Admin");

require("dotenv").config();

const loginAdmin = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const user = await Admin.findOne({ email });
        

        if(!user){
            return res.status(409).json({
                message:"Admin not Found with this email ID",
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
                email:user.email
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
            email:user.email,
            
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            sucess:false
        })
    }
}

module.exports = loginAdmin;