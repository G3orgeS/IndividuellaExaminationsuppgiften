const mongoose = require('mongoose');
const { Schema } = mongoose;

const filmSchema = new Schema({
    title:          { type: String, required: true },
    price:          { type: Number, required: true },
    description:    { type: String, required: true },
    imgURL:         { type: String, required: true }
})

module.exports = mongoose.model('Film', filmSchema)