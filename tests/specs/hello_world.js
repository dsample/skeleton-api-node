const chai = require('chai')
const supertest = require('supertest');

chai.should()
const expect = chai.expect
const assert = chai.assert

const api = supertest('http://api:3000')

describe('hello', function(){
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

  it('responds with status 200', function() {
    expect(response.statusCode).to.equal(200)
  })

  it('responds with text Hello World', function() {
    expect(response.text).to.equal("Hello World!")
  })

})