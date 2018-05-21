(function() {

  var app = angular.module("eposTill");

  var MainController = function($scope, $http) {

    //Shows the date in the header
    $scope.date = new Date();

    // Define app 
    var self = this;

    // Define API product list
    self.productURI = 'https://api.eposnowhq.com/api/V2/product/';

    //Define API key
    self.API_KEY = "MTZWREhQTlpJV1BQTEVGM0U2N1cxQlJEQ1lWMDcwWkU6SzVMVFVUWVFSMllKMjlJUDROUUxMTzFORUhGNzlIT0c="

    // Get the response, log it in console to test
    var onApiComplete = function(response) {
      console.log(response);
      $scope.hotDrinksData = (response.data);
  };

    // GET API and then assign the response    
    $http({
      method: 'GET',
      url: self.productURI + "?categoryID=1086251",
      headers: {
        'Authorization': 'Basic ' + self.API_KEY
      },

    }).then(onApiComplete);

    /* $scope.list = document.getElementsByClassName("eat-in").addEventListener(click, addToList);
    
    function addToList() {
    document.getElementById("list").innerHTML = ..
    }; */
    
  };
  app.controller("MainController", ["$scope", "$http", MainController]);

}());