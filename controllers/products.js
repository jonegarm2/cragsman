const request = require('request')
require('dotenv').config();

request(`${API}brands/?api_key=${process.env.API_KEY}`, function(error, response, body) {
    console.log(body)
})

module.exports = {
    products,
    brands,
    activities
}