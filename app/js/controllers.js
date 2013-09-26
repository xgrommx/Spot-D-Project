'use strict';

// MainCtrl
spotdProject.controller('MainCtrl', ['$scope', 'angularFire','$q',
	function MainCtrl ($scope, angularFire, $q) {
    $scope.viewLoading = true;
    var url = new Firebase('https://domenicocolandrea19.firebaseio.com/')
    ,   promise = angularFire(url, $scope, 'contacts', {});
    $q.all([promise]).then(function(){
      $scope.viewLoading = false;
      console.log('Contacts loaded from firebase!');
    });
  }]);

// AddCtrl to `Add` new contacts to contact list
spotdProject.controller('AddCtrl',
  function AddCtrl($scope, $location) {
    $scope.contact = {};
    $scope.add = function () {
    	console.log('clickd!')
      $scope.contacts.unshift($scope.contact);
      $location.url('/');
    };
  });

// EditCtrl to `Edit` contact
spotdProject.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location) {
    $scope.contact = $scope.contacts[$routeParams.id];
    $scope.edit = function () {
      $scope.contacts[$routeParams.id] = $scope.contact;
      $location.url('/');
    };
  });

// RemoveCtrl to `Delete` contact and provide `cancel` functionality
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
