var controller = require('../controllers/controller.js');

module.exports.routes = function(app) {

  app.get('/', controller.home);

  app.get('/api/getItems', controller.getItems);

  app.post('/api/addComment', controller.addComment);

  app.post('/api/newItem', controller.newItem);

  app.put('/api/buyItem', controller.buyItem);

}