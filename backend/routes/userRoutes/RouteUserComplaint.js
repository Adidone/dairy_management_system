const express = require('express'); 
const addComplaint = require('../../controllers/User/addComplaint');
const showComplaints = require('../../controllers/User/showComplaints');

const router = express.Router();

router.post("/complaint/add",addComplaint);
router.get("/complaint/show",showComplaints);

module.exports = router;

