const util = require('../src/test_exercise1/app');
describe('Test1', function() {
  describe('storeData()', function() {
    it('store successfully', function() {
      const array = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const expectedStr = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.storeData(array);
      expect(result).toBe(expectedStr);
    });
    it('fail to store data', function() {
      const array = [
        {
          keyA: 'value1', keyB: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const expectedStr = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.storeData(array);
      expect(result).not.toBe(expectedStr);
    });
  });
  describe('loadData()', function() {
    it('load data successfully', function() {
      const expectedArr = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const text = "key1=value1;key2=value2\nkey3=value3;key4=value4";
      var result = util.loadData(text);
      expect(result).toEqual(expectedArr);
    });
    it('fail to load data', function() {
      const expectedArr = [
        {
          key1: 'value1', key2: "value2" },
        { key3: "value3", key4: "value4" }
      ]
      const text = "key1=valueA;key2=valueB\nkey3=value3;key4=value4";
      var result = util.loadData(text);
      expect(result).not.toEqual(expectedArr);
    });
  });
});
