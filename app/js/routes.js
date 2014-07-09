angular.module('myApp.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      // $routeProvider.when('/dashboard', {
      //    templateUrl: 'partials/index.html',
      //    controller: 'LoginCtrl'
      // });

      $routeProvider.when('/dashboard', {
        authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/dashboard.html',
         controller: 'Main',
         resolve: { loadUser:  function(userFb) { return userFb.promiseToHaveUser(); }
        }
      });

      $routeProvider.when('/account', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/account.html',
         controller: 'AccountCtrl',
      });

      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'LoginCtrl'
      });


      $routeProvider.otherwise({redirectTo: '/dashboard'});
   }]);
