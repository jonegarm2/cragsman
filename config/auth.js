var User = require('../models/user')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
    var token = req.body.token || req.query.token || req.get('Authorization');
    if (token) {
        //remove the 'Bearer' if it ws included in the token header
        token = token.replace('Bearer ', '');
        //check if token is valid and not expired
        jwt.verify(token, SECRET, function (err, decoded) {
            if (err) {
                next(err);
            } else {
                //valid token, so add user to req
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();

    }
};