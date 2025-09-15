const express = require('express'); 
const showAllCollection = require('../../controllers/Milk/showAllCollection');
const showByDate = require('../../controllers/Milk/showMilkByDate');
const showByCust = require('../../controllers/Milk/showMilkByCust');
const showByEmp = require('../../controllers/Milk/showByEmp');
const todayCollection = require('../../controllers/Milk/todaysCollection');
const topMilkSellers = require('../../controllers/Milk/topMilkSellers');
const threeDaysSell = require('../../controllers/Milk/threeDaysSell');

const router = express.Router();

router.get("/showAllmilk",showAllCollection);
router.get("/showbydate",showByDate);
router.post("/showbycust",showByCust);
router.get("/showbyemp",showByEmp);
router.get("/todayscollection",todayCollection);
router.get("/topsellers",topMilkSellers);
router.get("/threedayssell",threeDaysSell);

module.exports = router;


