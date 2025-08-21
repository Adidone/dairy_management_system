const express = require('express'); 
const createAdmin = require('../../controllers/Admin/createAdmin.js');
const showAllOtp = require('../../controllers/Admin/showAllOtp.js');
const checkOtp = require('../../controllers/Admin/checkOtp.js');

const router = express.Router();

router.post("/create",createAdmin);
router.get("/showallotp",showAllOtp)
router.post("/checkotp",checkOtp)

module.exports = router;

