const express = require('express')
const app = express()

app.emit('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 5000)