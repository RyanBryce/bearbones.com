angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce, $interval, cart) {

$scope.isNavCollapsed = true;


$scope.cart = cart
// bearService.getCarts(cart).then((res) => {
//
// })
// $scope.cartNum = [];
//
// $scope.$watch('cartNum', () => {
//   if ($scope.cartNum) {
//
//     // $scope.prodCount = $scope.cartNum.length
//     $interval(function () {
//       $scope.prodCount = cart.length
//
//     }, 1000);
//   }
// }, true)


bearService.getProducts().then((res) => {
  // console.log(res);

    $scope.products = res
    // console.log(res);

  // console.log(res[0].imgurl1);
  // for (var i = 0; i < res.length; i++) {
  //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
  //   console.log($scope.img1);
  // }
})
// let cartItem = [];
$scope.setSelectedImage = function(image) {
  console.log(image);
    $scope.selectedImage = image;
    console.log( `this is selected ${$scope.selectedImage}`)
}


// $scope.sendToCart = (url, name, price, id) => {
// // let prod = {
// //   url,
// //   name,
// //   price,
// //   id
// // }
// // $scope.cartNum.push(id)
// price = parseInt(price)
// let quantity = 1;
// bearService.sendToCart(url, name, price, id, quantity)
//
//
//   // console.log(prod);
//   // cartItem.push(prod)
// }


// $interval(()=>{
//   console.log(cartItem)}, 6000);
// $scope.trustedSrc = function(src) {
//   console.log(src);
//     return $sce.trustAsResourceUrl(src);
//   }

});
