angular.module('controllers', []);

app.controller('WeightController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = true;

  if ($rootScope.currentDay.weight) {
    $scope.inputMode = false;
  }
  $scope.formData = {};
  $scope.formData.weight = $rootScope.currentDay.weight;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

});

app.controller('BFController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = true;

  if ($rootScope.currentDay.weight) {
    $scope.inputMode = false;
  }
  $scope.formData = {};
  $scope.formData.bf = $rootScope.currentDay.bf;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

});
