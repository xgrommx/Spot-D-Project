'use strict';
var spotdProject = angular.module('spotdProject', []);

spotdProject.config(['$routeProvider', '$locationProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'partials/mainView.html',
			controller: 'MainCtrl'
		})
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'EditCtrl'
    })
    .when('/remove/:id', {
      templateUrl: 'partials/remove.html',
      controller: 'RemoveCtrl'
    })
		.otherwise({
			redirectTo: '/'
		});

}]);
