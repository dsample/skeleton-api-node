var express = require('express')
var app = express()

const port = process.env.PORT || 3000

const swaggerConfig = {
  appRoot: __dirname
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})