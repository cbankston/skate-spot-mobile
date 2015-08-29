(function(angular) {
  'use strict';

  var module = angular.module('camera-test', [
  ]);

  angular.module('camera-test').config(RouteConfig);

})(angular);

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab.camera-test', {
      url: '/camera-test',
      views: {
        'tab-camera-test': {
          templateUrl: 'templates/camera-test/index.html',
          controller: 'CameraTestCtrl'
        }
      }
    });

};
