angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce, $interval, cart) {

$scope.isNavCollapsed = true;

$scope.cart = cart

bearService.getProducts().then((res) => {
  console.log(res);

    $scope.products = res
    // console.log(res);

  // console.log(res[0].imgurl1);
  // for (var i = 0; i < res.length; i++) {
  //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
  //   console.log($scope.img1);
  // }
})

$scope.setSelectedImage = function(image) {
  console.log(image);
    $scope.selectedImage = image;
    console.log( `this is selected ${$scope.selectedImage}`)
}

});
