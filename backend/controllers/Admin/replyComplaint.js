const User = require("../../models/User");
const Complaint = require("../../models/Complaint");
const Reply = require("../../models/reply");
const replyComplaint = async (req, res) => {
    try {
        const { custID, reply, msg } = req.body;
        
        const complaint = await Complaint.findOne({custID,msg}); 
 
        if(!complaint){
            return res.status(409).json({
                message: "Complaint with this ID is not present",
                success: false      
            });
        }
        
        const replied = await Reply.findOne({ custID,msg, reply });
        if (replied) {
            return res.status(409).json({
                message: "Replied Already",
                sucess: false
            })

        }
        const newReply = new Reply({
            custID,msg,reply
        })
        await newReply.save();

        const deleted = await Complaint.findOneAndDelete({custID,msg});
        if(!deleted){
            return res.status(400).json({
                message:"Complaint not deleted",
                sucess:false
            })
        }

        return res.status(201).json({
            success: true,
            message: "Reply Added SucessFully & deleted from Complaint model",
            
        });

    }
    catch (err) {
        res.status(500).json({
            message: err.message,
            sucess: false
        })
    }
}

module.exports = replyComplaint;