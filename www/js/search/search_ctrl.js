angular
	.module('search')
	.controller('SearchCtrl', SearchCtrl);

SearchCtrl.$inject = ['$scope','$ionicSlideBoxDelegate', '$ionicModal', 'SpotsRepo'];

function SearchCtrl($scope, $ionicSlideBoxDelegate, $ionicModal, SpotsRepo){
	var vm = this;
	this.initialized = false;

	$scope.refresh_location = refresh_location;

	$scope.position = 'rawr';
	$scope.center = null;

	refresh_location();

	SpotsRepo.all().then(function(data) {
	  $ionicSlideBoxDelegate.update();
	  $scope.spots = data.spots;
	});

	$scope.$on('mapInitialized', function(event, map) {
		vm.initialized = true;

		$scope.map = map;

		refresh_location();
	});

	function refresh_location() {
		console.log('performing refresh');
		navigator.geolocation.getCurrentPosition(success, error);

		function success(position) {
			console.log('refresh complete');

			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			if (vm.initialized) {
				$scope.map.setCenter(pos);
			}
			$scope.center = "" + pos.G + "," + pos.K;
			$scope.position = position;

			$scope.$broadcast('scroll.refreshComplete');
		}

		function error(err) {
			console.log('refresh error');

			$scope.position = 'There was an error getting your location';
			$scope.$broadcast('scroll.refreshComplete');
		}
	}

	$ionicModal.fromTemplateUrl('/templates/search/create-spot.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openModal = function() {
		$scope.modal.show();
	};

	$scope.create_spot = function(data) {
		data.lat = $scope.position.coords.latitude;
		data.long = $scope.position.coords.longitude;
		SpotsRepo.create(data).then(function(data) {
			$scope.spots.push(data.spot);
			$scope.modal.hide();
		}, function() {

		});
	};
}
