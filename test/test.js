// import { storeData } from '../src/test_exercise1/app';
var assert = require('assert');
var util = require('../src/test_exercise1/app');
describe('Array', function() {
  describe('storeData()', function() {
    it('should storeData ok', function() {
      const array = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const expect = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.storeData(array);
      assert.equal(result, expect);
    });
  });
  describe('loadData()', function() {
    it('should loadData ok', function() {
      const expect = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const text = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.loadData(text);
      assert.equal(result, expect);
    });
  });
});
