var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemLink: String,
  commentMsg: String
});


Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;