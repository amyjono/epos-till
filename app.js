(function(){

    var app = angular.module("eposTill", ["ngRoute"]); //define module and dependencies
    
    app.config(function($routeProvider){ 
      $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .otherwise({redirectTo:"/main"});
    });
    
}());