var app = angular.module('fitStats', ['controllers', 'factories']);

app.controller('Main', function($rootScope){
	//Dummy Data before populating firebase
	$rootScope.currentDay = {};
	$rootScope.currentDay.date = new Date();
	// $rootScope.currentDay.weight = 165.5;
	// $rootScope.currentDay.bf = 13.2;
	// $rootScope.currentDay.hr = 65;
	// $rootScope.currentDay.bps = 120;
	// $rootScope.currentDay.bpd = 75;
	// $rootScope.currentDay.calories = 2400;
	// $rootScope.currentDay.protein = 165;
	// $rootScope.currentDay.carbs = 240;
	// $rootScope.currentDay.fat = 8;
});
