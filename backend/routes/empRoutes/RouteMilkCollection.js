const express = require('express'); 
const milkCollection = require('../../controllers/Emp/milkCollection');

const router = express.Router();

router.post("/collectmilk",milkCollection);

module.exports = router;


