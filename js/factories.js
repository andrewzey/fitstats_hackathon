angular.module('factories', []);

app.factory('FormFunctions', function($rootScope, $filter){
  var submit = function(item, decimals) {
    $rootScope.currentDay[item] = $filter("number")(this.formData[item], decimals);
    this.inputMode = false;
  };

  //for later refactor, put edit function
  // var edit = function(){
  // };

  return {
    submit: submit
    //, edit: edit
  };
});
