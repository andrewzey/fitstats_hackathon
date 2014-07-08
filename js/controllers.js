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

app.controller('HRController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = true;

  if ($rootScope.currentDay.hr) {
    $scope.inputMode = false;
  }
  $scope.formData = {};
  $scope.formData.hr = $rootScope.currentDay.hr;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

});

app.controller('BPController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = true;

  if ($rootScope.currentDay.bps && $rootScope.currentDay.bpd) {
    $scope.inputMode = false;
  }
  $scope.formData = {};
  $scope.formData.bps = $rootScope.currentDay.bps;
  $scope.formData.bpd = $rootScope.currentDay.bpd;

  $scope.submit = FormFunctions.submit;

  $scope.submitBoth = function(){
    $scope.submit('bps', 0);
    $scope.submit('bpd', 0);
  };

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

});

app.controller('FoodController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = true;

  if ($rootScope.currentDay.calories && $rootScope.currentDay.protein && $rootScope.currentDay.carbs && $rootScope.currentDay.fat) {
    $scope.inputMode = false;
  }
  $scope.formData = {};
  $scope.formData.bps = $rootScope.currentDay.bps;
  $scope.formData.bpd = $rootScope.currentDay.bpd;

  $scope.submit = FormFunctions.submit;

  $scope.submitAll = function(){
    $scope.submit('calories', 0);
    $scope.submit('protein', 0);
    $scope.submit('carbs', 0);
    $scope.submit('fat', 0);
  };

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

});
