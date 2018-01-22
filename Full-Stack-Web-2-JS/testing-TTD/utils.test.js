const mocha = require('mocha')
const chai = require('chai')

const util = require('./util')

const expect = chai.expect



it('Should say hello with your name!', function () {
  const helloJoe = util.sayHello('Joe');
  const goodbyeJoe = util.sayGoodbye('Joe')
  expect(helloJoe).to.be.a('string');
  expect(goodbyeJoe).to.be.a('string')*
})
