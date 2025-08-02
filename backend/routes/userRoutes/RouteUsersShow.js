const express = require('express'); 
const showUsers = require('../../controllers/User/showUsers');

const router = express.Router();

router.get("/show",showUsers);

module.exports = router;

