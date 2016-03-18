
angular.module('buyOrSellApp')
.controller('BuyOrSellController', function($scope, $http) {
  
  $scope.$watch('username', function() {
    console.log("sup");
  });


  $scope.addTodo = function() {
   $http.post('api/todos', {task: $scope.newTodo})
   .then(function() {
    
   });

  }
});