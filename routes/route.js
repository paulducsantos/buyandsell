var controller = require('../controllers/controller.js');

module.exports.routes = function(app) {

  app.get('/', controller.home);

}