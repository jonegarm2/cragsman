var User = require('../models/user');
var Product = require('../models/product');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.json({token: createJWT(user)});
        })
        .catch(err => res.status(400).json(err));
}

function login(req, res) { 
  console.log(req.body)
    User.findOne({email: req.body.email}).exec().then(user => {
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          var token = createJWT(user);
          res.json({token: createJWT(user)});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    }).catch(err => res.status(401).json(err));
}

function getCart(req, res) {
  User.findById(req.user._id).populate('cart').exec()
  .then(user => {
    res.json(user.cart)
  });
}

function addToCart(req, res) {
  var product = req.body;
  getOrCreateProduct(product).then(p => {
    User.findById(req.user._id)
    .then(user => {
      user.cart.push(p._id);
      user.save();
      user.populate('cart').execPopulate().then(u => {
        res.json(user.cart)
      });
    });
  });
}

function getOrCreateProduct(product) {
  return new Promise(function(resolve) {
    Product.findOne({apiId: product.Id})
      .then(prod => {
        if (prod) return resolve(prod);
        Product.create(product)
          .then(p => resolve(p))
          .catch(err => console.log(err))
      });
  });
}

function removeFromCart(req, res) {
  User.findById(req.user._id, function(err, user) {
    user.cart.remove(req.params.id);
    user.save();
    user.populate('cart').execPopulate().then(u => {
      res.json(user.cart)
    });
  })
}

  /* --------- Helper Function --------- */


function createJWT(user) {
    delete user.cart;
    return jwt.sign(
        {user}, // data payload
        SECRET,
        {expiresIn: '24h'}
      );
  }

module.exports = {
    signup,
    login,
    getCart,
    addToCart, 
    removeFromCart
};

