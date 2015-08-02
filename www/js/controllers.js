angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var vm = this;
  this.initialized = false;

  $scope.refresh_location = refresh_location;

  $scope.position = 'rawr';
  $scope.center = null;

  refresh_location();

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
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
