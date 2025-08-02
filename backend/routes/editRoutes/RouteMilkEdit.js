
const express = require('express'); 
const editCollection = require('../../controllers/Milk/editCollection');

const router = express.Router();

router.put("/milk",editCollection);

module.exports = router;

