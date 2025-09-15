const express = require('express'); 
const loginEmp = require('../../controllers/Emp/loginEmp');

const router = express.Router();

router.post("/login",loginEmp);

module.exports = router;
