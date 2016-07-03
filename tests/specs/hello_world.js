const chai = require('chai')
const supertest = require('supertest')
const expect = chai.expect
const api = supertest(process.env.API_BASE_URI || 'http://api:3000')

describe('hello', function(){
  var response

  before(function(done){
    api.get('/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        response = res
        done()
      })
  })

  it('responds with status 200', function() {
    expect(response.statusCode).to.equal(200)
  })

  it('responds with text Hello World', function() {
    expect(response.text).to.equal('Hello World!')
  })

})
