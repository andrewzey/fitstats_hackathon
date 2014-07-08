angular.module('factories', []);

app.factory('FormFunctions', function($rootScope, $filter){
  var submit = function(item) {
    $rootScope.currentDay[item] = $filter("number")(this.formData[item], 1);
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
