//
// Global Name Variables
const appName = ''
const appNameNice = ''
const hostName = 'localhost'
const PORT = process.env.PORT || 1337
const IP = process.env.IP || '127.0.0.1'

//
// Includes
const path = require('path');

//
// Set up express, body-parser and mongodb
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//
// Mongoose properties
var dbName = ['mongodb://', hostName, '/', appName].join('')
mongoose.connect(dbName)

// Include Routes
// var routeName = require('./path/to/file')

// Bind Routes
// app.use('URI', routeName)

//
// Express properties
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

//
// Routes
app.get('/', (req, res) => {
  res.send('hello')
})

//
// Listen
app.listen(PORT, IP, () => {
  console.log([appNameNice, ' server listening at \n',
    '-->http://', hostName, ':', PORT].join(''))
})
