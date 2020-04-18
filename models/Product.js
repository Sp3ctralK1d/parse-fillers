const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    subcategory: String,
    price: String,
    category: String,
    quantity: Number
})

module.exports = mongoose.model('Product', productSchema)