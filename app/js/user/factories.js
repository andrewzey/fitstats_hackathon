angular.module('factories', []);

app.factory('FormFunctions', function($filter){
  var submit = function(formData, field, decimals) {
    var data = $filter("number")(formData, decimals);
    this.today.$child(field).$set(data);
    this.inputMode = false;
  };

  //fore some reason this doesn't work
  var edit = function(){
    this.inputMode = true;
  };

  return {
    submit: submit,
    edit: edit
  };
});
