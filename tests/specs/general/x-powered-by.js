const chai = require('chai')
const supertest = require('supertest')
const expect = chai.expect
const api = supertest(process.env.API_BASE_URI || 'http://api:3000')

describe('X-Powered-By', function(){
  var response

  before(function(done){
    api.get('/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        response = res
        done()
      })
  })

  it('responds without an X-Powered-By header', function() {
    expect(response.headers['x-powered-by']).to.be.undefined
  })
})
