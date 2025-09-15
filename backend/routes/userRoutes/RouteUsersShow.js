const express = require('express'); 
const showUsers = require('../../controllers/User/showUsers');
const showOtp = require('../../controllers/User/showOtp');

const router = express.Router();

router.get("/show",showUsers);
router.post("/showotp",showOtp)

module.exports = router;

