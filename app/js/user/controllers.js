angular.module('controllers', []);

app.controller('NavController', function($scope, loginService){
  $scope.logout = function(){
    loginService.logout();
  };
});

app.controller('Main', function($rootScope, $scope, $filter, syncData, userFb, $location){
  //user $location.path to set date
    //if location.path is "today", then take new Date() converted to YYYYMMDD
  
  // $scope.date = new Date();
  // $scope.fbDate = $filter("date")($scope.date, 'yyyyMMdd');
  $scope.fbDate = 20140708;

  $scope.userId = $scope.auth.user.uid;
  $scope.user = userFb.user;
  $scope.preload = $scope.user.dates[$scope.fbDate];

  $scope.today = syncData('users/' + $scope.userId + '/dates/' + $scope.fbDate);
});

app.controller('WeightController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = false;
  $scope.formData = {};
  $scope.formData.weight = $scope.preload.weight;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

});

app.controller('BFController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = false;
  $scope.formData = {};
  $scope.formData.bf = $scope.preload.bf;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };
});

app.controller('HRController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = false;
  $scope.formData = {};
  $scope.formData.hr = $scope.preload.hr;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };
});

app.controller('BPController', function($rootScope, $scope, FormFunctions){
  $scope.inputMode = false;
  $scope.formData = {};
  $scope.formData.bps = $scope.preload.bps;
  $scope.formData.bpd = $scope.preload.bpd;

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

  $scope.submitBoth = function(){
    $scope.submit($scope.formData.bps, "bps", 0);
    $scope.submit($scope.formData.bpd, 'bpd', 0);
  };

});

app.controller('FoodController', function($rootScope, $scope, $timeout, FormFunctions){
  $scope.inputMode = false;
  $scope.formData = {};
  $scope.formData.calories = $scope.preload.calories;
  $scope.formData.protein = $scope.preload.protein;
  $scope.formData.carbs = $scope.preload.carbs;
  $scope.formData.fat = $scope.preload.fat;

  console.log($scope.preload);

  $scope.submit = FormFunctions.submit;

  //should be refactored into separate factory
  $scope.edit = function(){
    $scope.inputMode = true;
  };

  $scope.submit = FormFunctions.submit;

  $scope.submitAll = function(){
    $scope.submit($scope.formData.calories, 'calories', 0);
    $scope.submit($scope.formData.protein, 'protein', 0);
    $scope.submit($scope.formData.carbs, 'carbs', 0);
    $scope.submit($scope.formData.fat, 'fat', 0);
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
  $timeout(function(){
    $scope.chartUpdate();
  }, 500);
});
