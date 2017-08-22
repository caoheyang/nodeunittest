var assert = require('assert');
var request = require('supertest');

describe('Routing', function() {
  var url = process.env.TESTURL || 'http://localhost:3000';
  var userCookie = '';

  before(function(done) {
   done();
  });

  describe('#a', function() {
    it('', function(done){
     //发送数据
    //   var profile = {
    //     email: 'xuyawenwen',
    //     password: '123456',
    //   };
      request(url)
        .get('/a')
        //.send(profile)
        .expect(200) //Status code   期望
        .end(function(err,res) {
          if (err) {
            throw err;
          }
        //   console.log(res)
          console.log("success res==>",res.text);
          done();
        });

    });
  });

});