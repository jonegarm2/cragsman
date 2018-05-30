var Product = require('../models/product');
const request = require('request')
require('dotenv').config();
const API = 'http://api.sierratradingpost.com/api/1.0/';

function products(req, res){
    getApiData('products', function(err, response, body) {
        if (err) return res.status(401).json(err);
        res.status(200).json(JSON.parse(body)); 
    })
}
function brands(req, res){
    getApiData('brands', function(err, response, body) {
        if (err) return res.status(401).json(err);
        res.status(200).json(JSON.parse(body)); 
    })
}

function activities(req, res){
    getApiData('departments', function(err, response, body) {
        if (err) return res.status(401).json(err);
        res.status(200).json(JSON.parse(body)); 
    })
}
function details(req, res){
    getApiData(`products/${req.params.id}`, function(err, response, body) {
        if (err) return res.status(401).json(err)
        res.status(200).json(body) 
    })
}

function getApiData(path, cb) {
    request(`${API}${path}/?perpage=100&api_key=${process.env.API_KEY}`, function(error, response, body) {
        cb(error, response, body)
    })
}



module.exports = {
    products,
    brands,
    activities,
    details
}