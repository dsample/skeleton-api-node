'use strict'

var helmet = require('helmet')

module.exports = function(app) {
  // Security: HSTS
  // Remove if not running on HTTPS
  const hsts = (maxAgeSeconds, includeSubdomains, preload) => {
    app.use(helmet.hsts({
      // Helmet's HSTS middleware takes milliseconds as input
      maxAge: (maxAgeSeconds * 1000),
      includeSubdomains: includeSubdomains,
      preload: preload,
      force: true
    }))
  }
  hsts.oneYear = 31557600

  return hsts
}
