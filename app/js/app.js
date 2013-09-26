'use strict';
var spotdProject = angular.module('spotdProject', ['firebase']);
spotdProject.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/mainView.html'
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
  // uncomment below to turn on html5 mode for `hashless` urls
  //$locationProvider.html5Mode(true);
}]);
