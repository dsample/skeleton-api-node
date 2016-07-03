const chai = require('chai')
const supertest = require('supertest');

chai.should()
const expect = chai.expect
const assert = chai.assert

const api = supertest(process.env.API_BASE_URI || 'http://api:3000')

describe('HSTS', function(){
  var response
  var error

  before(function(done){
    api.get('/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        error = err
        response = res
        done()
      })
  })

  it('responds with an Strict-Transport-Security header', function() {
    expect(response.headers['strict-transport-security']).to.equal('max-age=31557600')
  })
})
