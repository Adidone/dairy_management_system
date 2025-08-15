const express = require('express'); 
const addComplaint = require('../../controllers/User/addComplaint');
const showComplaints = require('../../controllers/User/showComplaints');
const replyComplaint = require('../../controllers/Admin/replyComplaint');

const router = express.Router();

router.post("/complaint/add",addComplaint);
router.get("/complaint/show",showComplaints);
router.post("/complaint/reply",replyComplaint);

module.exports = router;

