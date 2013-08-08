'use strict';

angular.module('myApp', ['myApp.controllers']).
config(function ($routeProvider) {
	$routeProvider.
	when('/view1', {
		templateUrl: 'partials/view1.html',
		controller: 'Controller1'
	}).
	otherwise({
		redirectTo: '/view1'
	});
});