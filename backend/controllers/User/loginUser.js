const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User.js");

require("dotenv").config();

const userLogin = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const user = await User.findOne({ email });
        

        if(!user){
            return res.status(409).json({
                message:"User not Found with this email ID",
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

module.exports = userLogin;