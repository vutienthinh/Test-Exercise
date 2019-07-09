// import { storeData } from '../src/test_exercise1/app';
var assert = require('assert');
var util = require('../src/test_exercise1/app');
describe('Test1', function() {
  describe('storeData()', function() {
    it('store successfully', function() {
      const array = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const expect = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.storeData(array);
      assert.equal(result, expect);
    });
    it('fail to store data', function() {
      const array = [
        {
          keyA: 'value1', keyB: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const expect = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.storeData(array);
      assert.notEqual(result, expect);
    });
  });
  describe('loadData()', function() {
    it('load data successfully', function() {
      const expect = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const text = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.loadData(text);
      assert.deepEqual(result, expect);
    });
    it('fail to load data', function() {
      const expect = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const text = "key1=valueA;key2=valueB\nkey3=value3;key4=value4";
      var result = util.loadData(text);
      assert.notDeepEqual(result, expect);
    });
  });
});
