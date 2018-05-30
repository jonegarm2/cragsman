var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    apiId: String,
    brand: String,
    desc: String,
    rating: Number
})

module.exports = mongoose.model('Product', productSchema);