var Item = require('../models/item.js');
var User = require('../models/user.js');
var Comment = require('../models/comment.js');

exports.home = function(req, res, next) {
  res.sendFile(process.cwd() + '/public/views/index.html');
}

