(function(angular) {
	'use strict';

	var module = angular.module('search', [
	]);

	angular.module('search').config(RouteConfig);

})(angular);

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/search/index.html',
          controller: 'SearchCtrl'
        }
      }
    });
}
