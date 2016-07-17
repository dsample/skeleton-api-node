'use strict'

const cors = require('./cors')
const hsts = require('./hsts')

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
