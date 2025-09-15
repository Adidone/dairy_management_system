const express = require('express'); 
const deleteUser = require('../../controllers/User/deleteUser');
const deleteEmp = require('../../controllers/Emp/deleteEmp');
const deleteCollection = require('../../controllers/Milk/deleteCollection');

const router = express.Router();

router.delete("/user",deleteUser);
router.delete("/emp",deleteEmp);
router.delete("/milk",deleteCollection);

module.exports = router;

