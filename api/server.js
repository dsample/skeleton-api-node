var express = require('express')
var app = express()

const port = process.env.PORT || 3000
const whitelistedOriginDomains = ['example.com', 'example.org']

// Security: CORS
function checkOriginWhitelist(origin, callback) {
  console.log("origin:", origin)
  var originIsWhitelisted = whitelistedOriginDomains.some(x => ("." + origin).endsWith(x))
  callback(null, originIsWhitelisted);
}
app.use(cors({
  origin: checkOriginWhitelist,
  // Headers you want to allow JavaScript to read
  exposeHeaders: ["Date", "Location"],
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
