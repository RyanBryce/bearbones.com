angular.module('bearBones').controller('cartCtrl', function ($scope, bearService, cart) {

  $scope.cart = cart

  //for colapsed nave bar using ui-bootsrap
  $scope.isNavCollapsed = true;

});
