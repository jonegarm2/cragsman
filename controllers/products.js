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

function details(req, res){
    getApiData(`/${req.params.id}`, function(err, response, body) {
        if (err) return res.status(401).json(err)
        res.status(200).json(body) 
    })
}

function search(req, res){
    searchApiData(req.body.search, function(err, response, body) {
        if (err) return res.status(401).json(err);
        res.status(200).json(JSON.parse(body).Result); 
    })
}

/*
    Utilitiy functions used to get data from API
*/

function getApiData(path, cb) {
    request(`${API}${path}/?&api_key=${process.env.API_KEY}`, function(error, response, body) {
        cb(error, response, body)
    })
}

function searchApiData(search, cb) {
    // http://api.sierratradingpost.com/api/1.0/products/search~{search-term-url-encoded-with-hyphens}/?api_key=YourApiKey
    request(`${API}products/search~${search.split(' ').join('-')}/?api_key=${process.env.API_KEY}`, function(error, response, body) {
        cb(error, response, body)
    })
}

module.exports = {
    products,
    details,
    search
}