'use strict'

const chai = require('chai')
const supertest = require('supertest')
const expect = chai.expect
const api = supertest(process.env.API_BASE_URI || 'http://api:3000')

describe('HSTS', function(){
  let response

  before(function(done){
    api.get('/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        response = res
        done()
      })
  })

  it('responds with an Strict-Transport-Security header', function() {
    expect(response.headers['strict-transport-security']).to.equal('max-age=31557600')
  })
})
