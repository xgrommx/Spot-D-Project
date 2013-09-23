'use strict';

spotdProject.controller('MainCtrl',
	function MainCtrl ($scope, $http) {
		// get static contact data from contacts.json
		$http.get('../js/data/contacts.json').success(function(data) {
			$scope.contacts = data;
		});
	});

spotdProject.controller('AddCtrl',
  function AddCtrl($scope, $location) {
    $scope.contact = {};
    $scope.add = function () {
    	console.log("clickd!")
      $scope.contacts.unshift($scope.contact);
      $location.url('/');
    };
  });

spotdProject.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.edit = function () {
      $scope.contacts[$routeParams.id] = $scope.contact;
      $location.url('/');
    };
  });

spotdProject.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.remove = function () {
      $scope.contacts.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });
