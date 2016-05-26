var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/chin', {
      templateUrl: '/views/chin.html',
      controller: 'ChinController',
    })
    .when('/cat', {
      templateUrl: '/views/cat.html',
      controller: 'CatController',
    })
    .when('/rabbit', {
      templateUrl: '/views/rabbit.html',
      controller: 'RabbitController',
    })
    .otherwise({
      redirectTo: 'rabbit',
    });
}]);
