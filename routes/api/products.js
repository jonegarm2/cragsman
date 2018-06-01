var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var productsCtrl = require('../../controllers/products');


/* ----- Public Routes ---------- */
router.get('/', productsCtrl.products);
router.post('/search', productsCtrl.search);
router.get('/details', productsCtrl.details);


//router.get('/cart', productsCtrl.cart);

module.exports = router;