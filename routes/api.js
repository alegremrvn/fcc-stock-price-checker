'use strict';

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      if (Array.isArray(req.query.stock)) {
        res.json({
          stockData: [
            {
              stock: 'golgol',
              price: 0,
              rel_likes: 0
            },
            {
              stock: 'golgol',
              price: 0,
              rel_likes: 0
            }
          ]
        })
      } else {
        res.json({
          stockData: {
            stock: 'golgol',
            price: 0,
            likes: 0
          }
        })
      }
    });
    
};
