(function() {

  var app = angular.module("eposTill");

  var DateController = function($scope) {

    //Shows the date in the header
    $scope.date = new Date();

  };
  app.controller("DateController", ["$scope", DateController]);

}());