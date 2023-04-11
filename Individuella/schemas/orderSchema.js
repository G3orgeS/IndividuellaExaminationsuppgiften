const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderRowSchema = Schema({ product: Schema.Types.ObjectId, amount: Number })

const orderSchema = Schema ({
    userId:     { type: mongoose.Types.ObjectId},
    orderRows:  { type: [orderRowSchema] },
})

module.exports = mongoose.model('order', orderSchema)