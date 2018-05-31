var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var productsCtrl = require('../../controllers/products');


/* ----- Public Routes ---------- */
router.get('/products', productsCtrl.products);
router.get('/products/:searchterm', productsCtrl.search);
router.get('/products/id', productsCtrl.details);
// router.get('/cart', productsCtrl.cart);

module.exports = router;