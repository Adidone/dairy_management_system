const Emp = require("../../models/Employe.js");
const bcrypt = require("bcrypt");
const createEmp = async (req, res) => {
    try{
        const{empID,name,email,password,role, phone_no, address} = req.body;

        if(!/^E/.test(empID)){
            return res.status(400).json({   
                message: "Employee ID must start with 'E'",
                success: false
            });
        }

        const emp = await Emp.findOne({email});  
        if(emp){
            return res.status(409).json({
                message: "ID already exists with this email",
                success: false      
            });
        }
        const hashed_password = await bcrypt.hash(password,10);
        const newEmp = new Emp({
            empID,name, email, password:hashed_password, role, phone_no, address
        });
        await newEmp.save();
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