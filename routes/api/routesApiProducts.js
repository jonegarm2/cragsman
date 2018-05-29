var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var productsCtrl = require('../../controllers/products');


/* ----- Public Routes ---------- */
router.post('/products', productsCtrl.login);
router.post('/brands', productsCtrl.signup);
router.post('/activities', productsCtrl.login);
router.post('/products', productsCtrl.login);
router.post('/products', productsCtrl.login);

module.exports = router;