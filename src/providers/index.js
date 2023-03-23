const Constants = require('../data/constants')

const axios = require('axios')

const geocoding = axios.create({
    baseURL: Constants.geocodingURI
})

module.exports = { geocoding }