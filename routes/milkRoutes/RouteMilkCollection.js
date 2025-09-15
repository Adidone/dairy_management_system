const express = require('express'); 
const milkCollection = require('../../controllers/Milk/milkCollection');

const router = express.Router();

router.post("/collectmilk",milkCollection);

module.exports = router;


