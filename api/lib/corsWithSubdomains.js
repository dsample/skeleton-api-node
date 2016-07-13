'use strict'

module.exports = function corsWithSubdomains(allowedOriginDomains) {
  if (!allowedOriginDomains) {
    throw new Error('An array of origin domains is required')
  }

  return function(origin, callback) {
    let originIsWhitelisted = allowedOriginDomains.some(x => ('.' + origin).endsWith(x))
    callback(null, originIsWhitelisted)
  }
}
