'use strict'

var express = require('express')
var app = express()
var helmet = require('helmet')
var cors = require('cors')
var corsWithSubdomains = require('./lib/corsWithSubdomains')
var bodyParser = require('body-parser')

// // Uncomment if using Mongo
// var db = require('./lib/db')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 3000
const whitelistedOriginDomains = ['example.com', 'example.org']

// Security: Remove server powered-by header
app.disable('x-powered-by')

// Security: HSTS
// Remove if not running on HTTPS
app.use(helmet.hsts({
  // Helmet's HSTS middleware takes milliseconds as input
  maxAge: (31557600 * 1000),
  includeSubdomains: false,
  preload: false,
  force: true
}))

app.use(cors({
  origin: corsWithSubdomains(whitelistedOriginDomains),
  // Headers you want to allow JavaScript to read
  exposeHeaders: ['Date', 'Location'],
  credentials: true,
  maxAge: 600,
  preflightContinue: false
}))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// // Uncomment if using Mongo in order to share the connection
// db.connect(process.env.MONGODB_URL, function(err) {
//   if (err) {
//     console.log('Unable to connect to Mongo')
//     process.exit(1)
//   }
//
  app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
  })
// })
