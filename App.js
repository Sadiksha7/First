const express = require('express')
const path = require('path')
// cost config = require('./config/config')
const mongoose = require('mongoose')
const app= express()
const port=3000


app.use(express.static(path.join(__dirname, "Public")))

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs')
app.set('views', 'View')

//mongoose connect
mongoose.connect('mongodb://localhost:27017/Sadu')

//Route call
const dashboardRoute = require('./Route/dashboard/index')
const indexRoute = require('./Route/product/product')


//integrate app
app.use(dashboardRoute)
app.use(indexRoute)
// app.use(productRoute)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})