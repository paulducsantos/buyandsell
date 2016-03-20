
angular.module('buyOrSellApp')
.controller('BuyOrSellController', function($scope, $http) {

  $scope.forms = {};
  $scope.login = function() {
    $http.post('/login', {
      username: $scope.forms.username,
      password: $scope.forms.password
    })
    .then(function(user) {
      console.log('here');
    });
  }

  $scope.getItems = function() {
    $http.get('/api/getItems')
    .then(function(response) {
      console.log(response);
      $scope.items = response.data;
    });
  }

  $scope.commentTxt = {};
  $scope.addComment = function(itemName) {
    $http.post('/api/addComment', {
      itemName: itemName,
      commentMsg: $scope.commentTxt.addComment
    })
    .then(function() {
      $scope.commentTxt.addComment = ''
      $scope.getItems();
    });
  }


  $scope.itemTxt = {};
  $scope.newItem = function() {
    $http.post('/api/newItem', {
      //get fields
      itemName: $scope.itemTxt.name,
      itemDescription: $scope.itemTxt.description,
      itemPrice: $scope.itemTxt.price
    })
    .then(function() {
      //clear fields
      $scope.itemTxt.name = '';
      $scope.itemTxt.description = '';
      $scope.itemTxt.price = '';
      $scope.getItems();
    })
  }


  $scope.buyItem = function(itemId) {
    $http.put('/api/buyItem', {itemId: itemId})
    .then(function() {
      $scope.getItems();
    });
  }
});

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});