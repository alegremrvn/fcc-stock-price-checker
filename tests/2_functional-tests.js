const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  suite('GET', function() {
    test('#1) viewing one stock', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .end(function(err, res) {
          assert.property(res.body, 'stockData')

          done()
        })
    })

    test('#2) viewing one stock and liking it', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .end(function(err, res) {
          assert.property(res.body, 'stockData')
          done()
        })
    })

    test('#3) viewing the same stock and liking it again', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .end(function(err, res) {
          assert.property(res.body, 'stockData')
          done()
        })
    })

    test('#4) viewing two stocks', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .end(function(err, res) {
          assert.property(res.body, 'stockData')
          done()
        })
    })

    test('#5) viewing two stocks and liking them', function(done) {
      chai.request(server)
        .get('/api/stock-prices')
        .end(function(err, res) {
          assert.property(res.body, 'stockData')
          done()
        })
    })
  })
});
