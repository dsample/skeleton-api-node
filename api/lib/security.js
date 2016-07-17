'use strict'

const cors = require('./security/cors')
const hsts = require('./security/hsts')

module.exports = function(app) {
  const disablePoweredByHeader = () => {
    // Security: Remove server powered-by header
    app.disable('x-powered-by')
  }

  return {
    cors: cors(app),
    hsts: hsts(app),
    disablePoweredByHeader: disablePoweredByHeader
  }
}
