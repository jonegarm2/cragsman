var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    apiId: String,
    brand: String,
    name: String,
    desc: String,
    rating: Number,
    imgUrl: String,
    bigImgUrl: String,
    price: Number
})

module.exports = mongoose.model('Product', productSchema);