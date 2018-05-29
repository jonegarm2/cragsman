var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: String,
    brand: String,
    rating: Number
})

module.exports = mongoose.model('Product', productSchema);