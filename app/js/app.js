/*globals moment, _*/
var $routeProviderReference;
var app = angular.module('app', ['ngRoute']);
app.constant('_', _);
//get an instance of routeprovider and keep it for configuring routes in the app.run()
app.config(['$routeProvider', function ($routeProvider) {
  $routeProviderReference = $routeProvider;
}]);

app.controller('appCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.isActive = function (viewLocation) { 
		console.log('current location : '+$location.path());
        return viewLocation === $location.path();
    };
}]);