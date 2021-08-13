const mongoose = require('mongoose')
const shortId = require('shortid')

const shortURLScheme = new mongoose.Schema({
    full: {
        type: String,
        require: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate //automatically run generate function so no wrap needed
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
}) 

module.exports = mongoose.model('ShortUrl, shortUrlSchema')