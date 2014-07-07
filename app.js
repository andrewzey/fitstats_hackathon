var app = angular.module('fitStats', []);

app.controller('DaySelect', function($scope, $http) {
	$scope.currentDay = {};
	$scope.currentDay.date = new Date();

	//Dummy Data before populating firebase
	$scope.currentDay.weight = 165.5;
	$scope.currentDay.bf = 13.2;
	$scope.currentDay.hr = 65;
	$scope.currentDay.bps = 120;
	$scope.currentDay.bpd = 75;
	$scope.currentDay.calories = 2400;
	$scope.currentDay.protein = 165;
	$scope.currentDay.carbs = 240;
	$scope.currentDay.fat = 87;
});
