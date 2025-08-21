const express = require('express'); 
const createUser = require('../../controllers/User/createUser');
const otpSubmit = require('../../controllers/User/otpSubmit');

const router = express.Router();

router.post("/create",createUser);
router.post("/otpsubmit",otpSubmit)

module.exports = router;

