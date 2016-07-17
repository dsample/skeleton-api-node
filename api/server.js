'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const security = require('./lib/security')(app)

// // Uncomment if using Mongo
// var db = require('./lib/db')

const port = process.env.PORT || 3000
const whitelistedOriginDomains = ['example.com', 'example.org']

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

security.cors(whitelistedOriginDomains, ['Date', 'Location'])
security.hsts(security.hsts.oneYear, false, false)
security.disablePoweredByHeader()

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
