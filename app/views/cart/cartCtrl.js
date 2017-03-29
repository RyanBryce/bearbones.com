angular.module('bearBones').controller('cartCtrl', function ($scope, bearService, cart) {

  console.log('this is cartCtrl ',cart)
  $scope.cart = cart
  console.log('this is scope cart', $scope.cart);


$scope.isNavCollapsed = true;
//




//   console.log(res[0].imgurl1);
//   for (var i = 0; i < res.length; i++) {
//     $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
//     console.log($scope.img1);
//   }
// })
// $scope.trustedSrc = function(src) {
//   console.log(src);
//     return $sce.trustAsResourceUrl(src);
//   }




});
