angular.module('bearBones').controller('cartCtrl', function ($scope, bearService, $sce) {

// $scope.isNavCollapsed = true;
//
bearService.getProducts().then((res) => {
  console.log(res);
  if (res) {
    $scope.products = res
  }
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
