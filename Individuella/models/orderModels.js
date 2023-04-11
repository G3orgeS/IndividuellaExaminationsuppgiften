const Order = require('../schemas/orderSchema')

exports.addOrder = async (req, res) => {

    // const { userId, orderRows } = req.body
    const { orderRows } = req.body

    // if(!userId || !orderRows) {
    if(!orderRows) {
        return res.status(400).json({
            message: 'det fattas något'
        })
    }
    const order = await Order.create({ userId: req.userId, orderRows })

    if(!order) {
        return res.status(500).json({
            message: 'Det blev fel'
        })
    }
    res.status(201).json(order)
}
exports.getOrders = async (req, res) => {

    const orders = await Order.find({ userId: req.userId })

    res.status(200).json(orders)
} 