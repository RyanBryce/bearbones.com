angular.module('bearBones')
.controller('checkoutCtrl', function($scope, bearService, cart, bearOrder){
  console.log(cart);
  $scope.cart = cart;
  var total = 0;
	for(var i = 0; i < $scope.cart.length; i++){
		$scope.cart[i].total = $scope.cart[i].quantity * $scope.cart[i].price;
		total += $scope.cart[i].total;
		$scope.total = total.toFixed(2);
	}
  // $scope.order = {};
  // $scope.order.total = 20;

  $scope.userForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

$scope.userOrder = (user, userCart) => {
  // let ids = [];
  console.log(user, userCart);
  // for (var i = 0; i < userCart.length; i++) {
  //   console.log(userCart[i].id);
  //   ids.push(parseInt(userCart[i].id))
  // }
  // console.log(ids);
  if (user.firstName && user.lastName && user.address && user.city && user.state && user.zip && user.email) {
    console.log("this should not fire", user,userCart);
    bearOrder.postOrder(user, userCart)
  }
  else {
    alert('Missing Shipping Info')
  }



}


// var handler = StripeCheckout.configure({
//   key: 'pk_test_wjVLR03Xb2k798iDsT0F66a5',
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   token: function(token) {
//     // You can access the token ID with `token.id`.
//     // Get the token ID to your server-side code for use.
//   }
// });
//
// $scope.clicker = () => {
//
//   handler.open({
//     name: 'Demo Site',
//     description: '2 widgets',
//     amount: 2000
//   });
// }
// // document.getElementById('customButton').addEventListener('click', function(e) {
// //   // Open Checkout with further options:
// //   e.preventDefault();
// // });
//
// // Close Checkout on page navigation:
// window.addEventListener('popstate', function() {
//   handler.close();
// });



})
