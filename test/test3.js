var assert = require('assert');
var util = require('../src/test_exercise3/app');
describe('Test3', function() {
  describe('calculateBaseOnCases()', function() {
    it('calculate successfully', function() {
      const expect = 663;
      const result = util.calculateBaseOnCases(990, 'IS_AN_EMPLOYEE');
      assert.equal(result, expect);
    });
    it('fail to calculate', function() {
      const expect = 600;
      const result = util.calculateBaseOnCases(990, 'IS_AN_EMPLOYEE');
      assert.notEqual(result, expect);
    });
  });
});
