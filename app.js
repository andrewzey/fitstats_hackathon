var app = angular.module('fitStats', []);

app.controller('DaySelect', function($scope, $http) {
	$scope.currentDay = new Date();
});
