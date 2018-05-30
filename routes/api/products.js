var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var productsCtrl = require('../../controllers/products');


/* ----- Public Routes ---------- */
router.get('/products', productsCtrl.products);
router.get('/products/id', productsCtrl.details);
router.get('/brands', productsCtrl.brands);
router.get('/activities', productsCtrl.activities);


module.exports = router;