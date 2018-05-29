const request = require('request')
require('dotenv').config();

request(`http://api.sierratradingpost.com/api/1.0/brands/?api_key=b8073f4e699586882039214e4f89f943`, function(error, response, body) {
    console.log(body)
})