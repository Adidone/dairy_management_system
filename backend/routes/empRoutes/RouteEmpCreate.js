const express = require('express'); 
const createEmp = require('../../controllers/Emp/createEmp.js');

const router = express.Router();

router.post("/create",createEmp);

module.exports = router;

