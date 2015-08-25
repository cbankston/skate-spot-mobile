(function(angular) {
	'use strict';

	var module = angular.module('spot', [
	]);

	angular.module('spot').config(RouteConfig);

})(angular);

RouteConfig.$inject = ['$stateProvider'];
function RouteConfig($stateProvider) {
  $stateProvider
    .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/spot/index.html',
          controller: 'SearchCtrl'
        }
      }
    })
    .state('create-spot', {
      url: '/spot/create',
      templateUrl: 'templates/spot/create.html',
      controller: 'CreateSpotCtrl'
    });
}
