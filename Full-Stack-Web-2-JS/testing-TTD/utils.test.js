const mocha = require('mocha')
const chai = require('chai')

const util = require('./util')

const expect = chai.expect



it('Should say hello with your name!', function () {
  const helloJoe = util.sayHello('Joe');
  expect(helloJoe).to.be.a('string');
})

it('Should say goodbye with a pram of name', function() {
  const goodbyeJoe = util.sayGoodbye('Joe')
  expect(goodbyeJoe).to.be.a('string')
})
