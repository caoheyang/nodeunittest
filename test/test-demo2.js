var assert = require('assert');
var request = require('supertest');
var assert = require("assert");

describe('Array', function() {  
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(done){
      assert.equal(0, [1,2,3].indexOf(1));
      done();
    });
  });
});