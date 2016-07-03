var express = require('express')
var app = express()
var helmet = require('helmet')
var cors = require('cors')
var corsWithSubdomains = require('./lib/corsWithSubdomains')

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

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
