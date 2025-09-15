const express = require('express'); 
const userLogin = require('../../controllers/User/loginUser');

const router = express.Router();

router.post("/login",userLogin);

module.exports = router;
