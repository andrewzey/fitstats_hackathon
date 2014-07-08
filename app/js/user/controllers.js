angular.module('controllers', []);

app.controller('Main', function($rootScope){
  //Dummy Data before populating firebase
  $rootScope.currentDay = {};
  $rootScope.currentDay.date = new Date();
  // $rootScope.currentDay.weight = 165.5;
  // $rootScope.currentDay.bf = 13.2;
  // $rootScope.currentDay.hr = 65;
  // $rootScope.currentDay.bps = 120;
  // $rootScope.currentDay.bpd = 75;
  $rootScope.currentDay.calories = 2400;
  $rootScope.currentDay.protein = 165;
  $rootScope.currentDay.carbs = 240;
  $rootScope.currentDay.fat = 80;
});

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
  $scope.formData.calories = $rootScope.currentDay.calories;
  $scope.formData.protein = $rootScope.currentDay.protein;
  $scope.formData.carbs = $rootScope.currentDay.carbs;
  $scope.formData.fat = $rootScope.currentDay.fat;

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

  $scope.chartUpdate = function(){
    $scope.macroNutrientData = [
        { key: "Protein",
          y: $scope.formData.protein
        },
        {
          key: "Carbs",
          y: $scope.formData.carbs
        },
        {
          key: "Fat",
          y: $scope.formData.fat
        }
    ];

    var colorArray = ['#61ce5c', '#59c2e6', '#d57272'];
    $scope.colorFunction = function() {
      return function(d, i) {
          return colorArray[i];
        };
    };
    $scope.xFunction = function(){
        return function(d) {
            return d.key;
        };
    };
    $scope.yFunction = function(){
        return function(d) {
            return d.y;
        };
    };

    $scope.descriptionFunction = function(){
        return function(d){
            return d.key;
        };
    };
  };
  $scope.chartUpdate();
});
