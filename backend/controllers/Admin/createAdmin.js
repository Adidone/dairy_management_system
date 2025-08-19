const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
const createAdmin = async (req, res) => {
    try{
        const{email,password} = req.body;
        // console.log(name, email, password, role, phone_no, address);
        const user = await Admin.findOne({email});  
        if(user){
            return res.status(409).json({
                message: "ID already exists with this email",
                success: false      
            });
        }
        const hashed_password = await bcrypt.hash(password,10);
        const newAdmin = new Admin({
            email,
            password: hashed_password
        });
        await newAdmin.save();   
        // console.log(newUser.name);
        return res.status(201).json({   
            message: "Admin created successfully",
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

module.exports = createAdmin;