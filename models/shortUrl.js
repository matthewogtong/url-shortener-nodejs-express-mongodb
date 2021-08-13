const mongoose = require('mongoose')

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