
const express = require('express');
const router = express.Router();


const addUser = require('../controller/userController');

const getUser = require('../controller/userController');
router.post('/add',addUser);
router.get('/all',getUser)

module.exports = router;