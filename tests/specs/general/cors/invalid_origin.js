const chai = require('chai')
const supertest = require('supertest');
const expect = chai.expect
const api = supertest(process.env.API_BASE_URI || 'http://api:3000')

describe('CORS', function(){
  describe('From an invalid origin', function() {
    var response
    var error

    before(function(done){
      api.options('/')
        .set('Accept', 'application/json')
        .set('Origin', 'http://foo.com')
        .set('Access-Control-Request-Method', 'GET')
        .set('Access-Control-Request-Headers', 'Foo')
        .end(function(err, res){
          error = err
          response = res
          done()
        })
    })

    it('responds with OK (200)', function() {
      expect(response.statusCode).to.equal(200)
    })

    it('responds with the Access-Control-Allow-Origin header', function() {
      expect(response.headers['access-control-allow-origin']).to.be.undefined
    })
    it('responds with the Access-Control-Allow-Methods header', function() {
      expect(response.headers['access-control-allow-methods']).to.be.undefined
    })
    it('responds with the Access-Control-Allow-Headers header', function() {
      expect(response.headers['access-control-allow-headers']).to.be.undefined
    })
    it('responds with the Access-Control-Max-Age header', function() {
      expect(response.headers['access-control-max-age']).to.be.undefined
    })
    it('responds with the Access-Control-Allow-Credentials header', function() {
      expect(response.headers['access-control-allow-credentials']).to.be.undefined
    })
    // it('responds with the Access-Control-Expose-Headers header', function() {
    //   expect(response.headers['access-control-expose-headers']).to.equal('Foo')
    // })
  })
})
