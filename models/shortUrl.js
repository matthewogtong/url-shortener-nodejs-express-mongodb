const mongoose = require('mongoose')
const shortId = require('shortid')

const shortURLScheme = new mongoose.Schema({
    full: {
        type: String,
        require: true
    },
    short: {
        type: String,
        required: true
    }
}) 