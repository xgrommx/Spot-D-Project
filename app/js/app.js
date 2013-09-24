'use strict';
var spotdProject = angular.module('spotdProject', []);
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

  // To allow URL's with no hash un commment the line below.
  $locationProvider.html5Mode(true);
}]);
