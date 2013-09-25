'use strict';

// MainCtrl
spotdProject.controller('MainCtrl', ['$scope', 'angularFire',
	function MainCtrl ($scope, angularFire) {
		// get static contact data from contacts.json
		//$http.get('../js/data/contacts.json').success(function(data) {
			//$scope.contacts = data;
    var data = new Firebase('https://domenicocolandrea19.firebaseio.com/');
    angularFire(data, $scope, 'contacts');
		}
  ]);

// AddCtrl to `Add` new contacts to contact list
spotdProject.controller('AddCtrl',
  function AddCtrl($scope, $location, angularFire) {
    $scope.contact = {};
    $scope.add = function () {
    	console.log("clickd!")
      $scope.contacts.unshift($scope.contact);
      $location.url('/');
    };
  });

// EditCtrl to `Edit` contact
spotdProject.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location, angularFire) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.edit = function () {
      $scope.contacts[$routeParams.id] = $scope.contact;
      $location.url('/');
    };
  });

// RemoveCtrl to `Delete` contact and provide `cancel` functionality
spotdProject.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location, angularFire) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.remove = function () {
      $scope.contacts.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });
