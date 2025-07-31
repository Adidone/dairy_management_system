const express = require('express'); 
const createAdmin = require('../../controllers/Admin/createAdmin.js');

const router = express.Router();

router.post("/create",createAdmin);

module.exports = router;

