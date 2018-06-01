var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users');


/* ----- Public Routes ---------- */
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);



router.get('/cart', usersCtrl.getCart);
router.post('/cart', usersCtrl.addToCart);
router.delete('/cart', usersCtrl.removeFromCart);

module.exports = router;