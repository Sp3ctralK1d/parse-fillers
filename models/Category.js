const mongoose = require('mongoose')

const categoryScheme = new mongoose.Schema({
    name: String,
    subcategories: [String]
})

module.exports = mongoose.model('Category', categoryScheme)