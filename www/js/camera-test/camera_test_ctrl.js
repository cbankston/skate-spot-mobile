angular.module('camera-test')

.controller('CameraTestCtrl', function($scope) {
  $scope.select_photo = select_photo;
  $scope.take_video = take_video;

  function select_photo() {
    console.log('select_photo clicked!');
    navigator.camera.getPicture(cameraSuccess, cameraError, {
      quality: 75,
      destinationType : navigator.camera.DestinationType.DATA_URL,
      sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit : true,
      encodingType: navigator.camera.EncodingType.JPEG,
      mediaType: navigator.camera.MediaType.ALLMEDIA,
      saveToPhotoAlbum: false
    });
  }

  function take_video() {
    console.log('take_video clicked!');
    navigator.camera.getPicture(cameraSuccess, cameraError, {
      quality: 75,
      destinationType : navigator.camera.DestinationType.DATA_URL,
      sourceType : navigator.camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: navigator.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true
    });
  }

  function cameraSuccess(imageData) {
    console.log('camera success');
    console.log(imageData);

    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
  }

  function cameraError(message) {
    console.log('camera error: ' + message);
  }

});
