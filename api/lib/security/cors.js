'use strict'

const cors = require('cors')
const corsWithSubdomains = require('./corsWithSubdomains')

module.exports = function(app) {
  return (whitelistedOriginDomains, exposeHeaders) => {
    app.use(cors({
      origin: corsWithSubdomains(whitelistedOriginDomains),
      // Headers you want to allow JavaScript to read
      exposeHeaders: exposeHeaders,
      credentials: true,
      maxAge: 600,
      preflightContinue: false
    }))
  }
}
