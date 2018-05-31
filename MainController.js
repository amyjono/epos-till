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
    self.API_KEY = "MTZWREhQTlpJV1BQTEVGM0U2N1cxQlJEQ1lWMDcwWkU6SzVMVFVUWVFSMllKMjlJUDROUUxMTzFORUhGNzlIT0c=";

    // Get the response, log it in console to test
    var onApiComplete = function(response) {
      console.log(response);
      $scope.apiData = (response.data);
    };

    // GET API and then assign the response    
    $http({
      method: 'GET',
      url: self.productURI,
      headers: {
        'Authorization': 'Basic ' + self.API_KEY
      },
    }).then(onApiComplete);

    // Empty array for list of items
    $scope.itemList = [];

    // Empty array to log the price seperately
    var price = [];

    // Empty array for totalPrice to be displayed
    $scope.totalPrice = 0;

    // ng-click function to display Name and SalePrice in .total div
    $scope.addItem = function(item) {
      $scope.itemList.push(item.Name + " " + item.SalePrice);
    };

    // Equation for totalPrice
    function getSum(total, num) {
      return (total + num);
    }

    // Get the totalPrice and display on screen, parseFloat to return floating point number

    $scope.addPrices = function(item) {
      price.push(item.SalePrice);
      $scope.totalPrice = parseFloat(price.reduce(getSum)).toFixed(2);
    };
    
    // Function to clear order
    $scope.clearOrder = function(){
      $scope.itemList = [];
      $scope.totalPrice = 0;
    };

  };
  app.controller("MainController", ["$scope", "$http", MainController]);

}());