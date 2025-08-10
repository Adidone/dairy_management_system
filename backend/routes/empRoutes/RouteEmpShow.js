const express = require('express'); 
const showEmp = require('../../controllers/Emp/showEmp');

const router = express.Router();

router.get("/show",showEmp);

module.exports = router;
