const express = require('express'); 
const registerCattle = require('../../controllers/Cattle/registerCattle');

const router = express.Router();

router.post("/register",registerCattle);

module.exports = router;

