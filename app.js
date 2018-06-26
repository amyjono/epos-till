(function() {

  var app = angular.module("eposTill", ["ngRoute"]); //define module and dependencies

  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "ApiController"
      })
      .when("/hotDrinks", {
        templateUrl: "hotDrinks.html",
        controller: "ApiController"
      })
      .when("/softDrinks", {
        templateUrl: "softDrinks.html",
        controller: "ApiController"
      })
      .when("/smoothies", {
        templateUrl: "smoothies.html",
        controller: "ApiController"
      })
      .when("/beer", {
        templateUrl: "beer.html",
        controller: "ApiController"
      })
      .when("/whiteWine", {
        templateUrl: "whiteWine.html",
        controller: "ApiController"
      })
      .when("/redWine", {
        templateUrl: "redWine.html",
        controller: "ApiController"
      })
      .when("/cocktails", {
        templateUrl: "cocktails.html",
        controller: "ApiController"
      })
      .otherwise({
        redirectTo: "main/"
      });
  });
}());