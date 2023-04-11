const router = require('express').Router()
const { verifyToken } = require('../authentication/auth')
const { addOrder, getOrders } = require('../models/orderModels')

router.post('/addOrder', verifyToken, addOrder)
router.get('/myOrders', verifyToken, getOrders)

module.exports = router