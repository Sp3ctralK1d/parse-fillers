const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    subcategory: String,
    price: String,
    category: String,
    quantity: Number,
    supplier: String,
    shopname: String,
    quantityOnShop: String,
    unit: String
})

module.exports = mongoose.model('Product', productSchema)