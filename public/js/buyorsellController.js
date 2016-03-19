
angular.module('buyOrSellApp')
.controller('BuyOrSellController', function($scope, $http) {

  $scope.getItems = function() {
    console.log('it happens');
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
    console.log('here');
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
    console.log(itemId);
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