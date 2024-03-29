var app = angular.module('myApp', [
	'controllers',
	'factories',
	// 'ngAnimate',
	// 'fx.animations',
	'nvd3ChartDirectives',
	'myApp.config',
	'myApp.routes',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
  'simpleLoginTools',
  'routeSecurity',
	'firebase'
])

.run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
  if( FBURL === 'https://INSTANCE.firebaseio.com' ) {
     // double-check that the app has been configured
     angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
     setTimeout(function() {
        angular.element(document.body).removeClass('hide');
     }, 250);
  }
  else {
     // establish authentication
     $rootScope.auth = loginService.init('/login');
     $rootScope.FBURL = FBURL;
  }
}]);
