const express = require('express'); 
const showAllCollection = require('../../controllers/Milk/showAllCollection');
const showByDate = require('../../controllers/Milk/showMilkByDate');
const showByCust = require('../../controllers/Milk/showMilkByCust');
const showByEmp = require('../../controllers/Milk/showByEmp');

const router = express.Router();

router.get("/showAllmilk",showAllCollection);
router.get("/showbydate",showByDate);
router.get("/showbycust",showByCust);
router.get("/showbyemp",showByEmp);

module.exports = router;


