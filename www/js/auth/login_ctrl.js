angular	.module('auth')	.controller('loginCtrl', loginCtrl);loginCtrl.$inject = ['$scope', '$state', 'Auth'];function loginCtrl($scope, $state, Auth){	$scope.login_skater = function(data) {		Auth.login(data).then(function() {			$state.go('tab.search');		}, function(data) {		});	}}