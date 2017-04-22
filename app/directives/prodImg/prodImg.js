angular.module('bearBones')
.directive('selectedImg', function() {
  return {
    restrict: 'E',
    templateUrl: './directives/prodImg/prodImg.html',
    controller: ($scope) => {
      //allows image to be set on click
      $scope.initImg = true;
      $scope.setSelectedImage = function(image) {
        if (image) {
          $scope.initImg = false;
          $scope.selectedImage = image;
        }
      }
    }
  };
});
