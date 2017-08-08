var express = require('express')
var app = express()
var routes = require("../src/route/routes")
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var http = require('http')

mongoose.connect('mongodb://patient:patient123@ds139869.mlab.com:39869/patient',
    {
        useMongoClient: true
    })

app.use(bodyParser.json())

routes(app)

app.use((err, req, res, next) => {

    console.log(err.message)

    res.send(err.message)
    next()
})

app.listen(1000, () => {
    console.log('server is running on 1000 port')
})




module.exports = app