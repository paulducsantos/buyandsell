var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
  
});


exports.userSchema = mongoose.model('User', userSchema);
