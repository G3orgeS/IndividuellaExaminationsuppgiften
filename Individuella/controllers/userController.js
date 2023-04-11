const router = require('express').Router();
const { verifyToken } = require('../authentication/auth');
const { addUser, login, getAllUsers } = require('../models/userModels');

router.post('/add', addUser)
router.post('/login', login)
router.get('/getAll', verifyToken, getAllUsers)

module.exports = router