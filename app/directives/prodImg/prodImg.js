angular.module('bearBones')
.directive('selectedImg', function() {
  return {
    restrict: 'E',
    templateUrl: './directives/prodImg/prodImg.html',
    controller: ($scope) => {
      $scope.initImg = true;
      $scope.setSelectedImage = function(image) {
        if (image) {
          $scope.initImg = false;
          console.log(image);
          $scope.selectedImage = image;
          console.log( `this is selected ${$scope.selectedImage}`)
        }
      }
    }
  };
});
