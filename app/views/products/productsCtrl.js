angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce, $interval) {

$scope.isNavCollapsed = true;

bearService.getProducts().then((res) => {
  // console.log(res);
  if (res) {
    $scope.products = res
    console.log(res);
  }
  // console.log(res[0].imgurl1);
  // for (var i = 0; i < res.length; i++) {
  //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
  //   console.log($scope.img1);
  // }
})
// let cartItem = [];
$scope.sendToCart = (url, name, price, id) => {
// let prod = {
//   url,
//   name,
//   price,
//   id
// }
price = parseInt(price)
let quantity = 1;
bearService.sendToCart(url, name, price, id, quantity)


  // console.log(prod);
  // cartItem.push(prod)
}
// $interval(()=>{
//   console.log(cartItem)}, 6000);
// $scope.trustedSrc = function(src) {
//   console.log(src);
//     return $sce.trustAsResourceUrl(src);
//   }

});
