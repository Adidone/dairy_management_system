const User = require("../../models/User.js");
const bcrypt = require("bcrypt");
const createEmp = async (req, res) => {
    try{
        const{empID,name,email,password,role, phone_no, address} = req.body;
        // console.log(name, email, password, role, phone_no, address);
        const user = await User.findOne({email});  
        if(user){
            return res.status(409).json({
                message: "ID already exists with this email",
                success: false      
            });
        }
        const hashed_password = await bcrypt.hash(password,10);
        const newUser = new User({
            empID,name, email, password:hashed_password, role, phone_no, address
        });
        await newUser.save();   
        // console.log(newUser.name);
        return res.status(201).json({   
            message: "Emp created successfully",
            success: true
        });
    }
    catch(err) {
        res.status(500).json({
            message: err.message,
            success: false
        });
    }   
}

module.exports = createEmp;