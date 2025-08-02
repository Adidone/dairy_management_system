const User = require("../../models/User.js");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
    try{
 
        let{custID,name,email,password,role, phone_no, address} = req.body;
        
        const user = await User.findOne({email}); 
 
        if(user){
            return res.status(409).json({
                message: "ID already exists with this email",
                success: false      
            });
        }
        const hashed_password = await bcrypt.hash(password,10);
        const newUser = new User({
            custID,name, email, password:hashed_password, role, phone_no, address
        });
        await newUser.save();
        return res.status(201).json({   
            message: "User created successfully",
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

module.exports = createUser;