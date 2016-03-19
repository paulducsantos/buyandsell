var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = 'mongodb://localhost/buyandsell';
mongoose.connect(db)

var itemSchema = new Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSold: Boolean,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  money: Number,
  collectedItems: [{
    type: String
  }]
  
});

var commentSchema = new Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemLink: String,
  commentMsg: String
});


Comment = mongoose.model('Comment', commentSchema);
Item = mongoose.model('Item', itemSchema);
User = mongoose.model('User', userSchema);

var user1 = new User({
  username: 'paulsantos',
  password: 'password',
  money: 9000,
  collectedItems: ['Charizard', 'MewTwo']
});

user1.save(function(err) {
  if(err) throw err;
  var comment1 = new Comment({
    commentMsg: "Charizard is the best",
    _owner: user1.id,
    itemLink: "Charizard"
  });

  var comment2 = new Comment({
    commentMsg: "MewTwo is the cooler",
    _owner: user1.id,
    itemLink: "MewTwo"
  });

  comment1.save(function(err) {
    if(err) throw err;
    comment2.save(function(err) {
      if(err) throw err;
    });
  });

  var item1 = new Item({
    itemName: 'Charizard',
    _owner: user1.id,
    itemDescription: "Best pokemon ever",
    itemPrice: 9000,
    itemSold: false
  });
  item1.save(function(err) {
    if(err) throw err;

    Item.update({
      itemName: 'Charizard'
    }, {
      $push: {
        comments: comment1._id
      }
    }).exec(function(err) {
      if(err) throw err;
      console.log('done');
    });
  });
  var item2 = new Item({
    itemName: 'MewTwo',
    _owner: user1.id,
    itemDescription: "He is Psycic",
    itemPrice: 4500,
    itemSold: false
  });
  item2.save(function(err) {
    if(err) throw err;

    Item.update({
      itemName: 'MewTwo'
    }, {
      $push: {
        comments: comment2._id
      }
    }).exec(function(err) {
      if(err) throw err;
      console.log('done');
    });
  });
});


var user2 = new User({
  username: 'tomcruise',
  password: 'password',
  money: 8000,
  collectedItems: []
});

user2.save(function(err) {
  if(err) throw err;
  var comment1 = new Comment({
    commentMsg: "He's alright",
    _owner: user2.id,
    itemLink: "Charizard"
  });

  var comment2 = new Comment({
    commentMsg: "MewTwo is psychic",
    _owner: user2.id,
    itemLink: "MewTwo"
  });

  comment1.save(function(err) {
    if(err) throw err;
    comment2.save(function(err) {
      if(err) throw err;
    });
  });

  Item.update({
    itemName: 'Charizard'
  }, {
    $push: {
      comments: comment1._id
    }
  }).exec(function(err) {
    if(err) throw err;
    console.log('done');
  });

  Item.update({
    itemName: 'MewTwo'
  }, {
    $push: {
      comments: comment2._id
    }
  }).exec(function(err) {
    if(err) throw err;
    console.log('done');
  });
});

