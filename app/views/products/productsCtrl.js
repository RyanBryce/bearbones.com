angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce, $interval, cart) {

  $scope.isNavCollapsed = true;
  //here using resolve and injecting cart into contorller used by nav to watch and assign badge among other things
  $scope.cart = cart

  //my products are being grabbed from my products table in my db and set into view two way data binding
  bearService.getProducts().then((res) => {
      $scope.products = res
  })
  //used to change selected img and allow it to be changed on a ng-click in a directive 
  $scope.setSelectedImage = function(image) {
      $scope.selectedImage = image;
  }

});
