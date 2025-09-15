
const express = require('express'); 
const editCollection = require('../../controllers/Milk/editCollection');
const editEmp = require('../../controllers/Emp/editEmp');
const editUser = require('../../controllers/User/editUser');

const router = express.Router();

router.put("/milk",editCollection);
router.put("/emp",editEmp);
router.put("/user",editUser);

module.exports = router;

