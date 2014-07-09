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

app.factory('userFb', function($rootScope, $firebase, $q) {
  return {
    user: null,
    promiseToHaveUser: function() {
      var deferred = $q.defer();

      if (this.user === null) {
        this.user = $firebase(new Firebase('https://fitstats.firebaseio.com/users/' + 'simplelogin:1'));
        this.user.$on('loaded', function(loadedData) {
          deferred.resolve();
        });
      }
      else {
        deferred.resolve();
      }

      return deferred.promise;
    }
  };
});
