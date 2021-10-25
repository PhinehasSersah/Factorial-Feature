var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('the function will work only when 5! is equal to 20', () => {
  //setup
  const inputNumber = 5;
  const result = 120;
  //exercise
  const expected = Calculate.factorial(inputNumber);
  //verify
  assert.equal(result, expected)
})
it('the function will work only when 3! is equal to 6', () => {
  //setup
  const inputNumber = 3;
  const result = 6;
  //exercise
  const expected = Calculate.factorial(inputNumber);
  //verify
  assert.equal(result, expected)
})
it('0! should return 1', () => {
  //setup
  const inputNumber = 0;
  const result = 1;
  //exercise
  const expected = Calculate.factorial(inputNumber);
  //verify
  assert.equal(result, expected)
})
  });
});