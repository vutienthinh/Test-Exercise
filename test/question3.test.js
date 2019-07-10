// var assert = require('assert');
const util = require('../src/test_exercise3/app');
describe('Test3', function() {
  describe('calculateBaseOnCases()', function() {
    it('calculate successfully', function() {
      const expectedAmount = 663;
      const result = util.calculateBaseOnCases(990, 'IS_AN_EMPLOYEE');
      // assert.equal(result, expect);
      expect(result).toBe(expectedAmount);
    });
    it('fail to calculate', function() {
      const expectedAmount = 600;
      const result = util.calculateBaseOnCases(990, 'IS_AN_EMPLOYEE');
      // assert.notEqual(result, expect);
      expect(result).not.toBe(expectedAmount);
    });
  });
});
