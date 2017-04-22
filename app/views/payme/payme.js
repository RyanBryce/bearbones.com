angular.module('bearBones')
.controller('payMeCtrl', function ($scope, bearOrder, $stateParams, cart, $state) {
  $scope.cart = cart
  console.log(`This is inside payment cart ${cart}`);

  // var total = 0;
	// for(var i = 0; i < $scope.cart.length; i++){
	// 	$scope.cart[i].total = $scope.cart[i].quantity * $scope.cart[i].price;
	// 	total += $scope.cart[i].total;
	// 	$scope.total = total.toFixed(2);
	// }

  console.log("i am in state paraps id payme", $stateParams.id);
  $scope.hi = $stateParams.id;
  var id = $stateParams.id;
  console.log(id);

  bearOrder.getOrder(id).then((res) => {
    console.log(cart);
    console.log('this is the order get response ', res.data);

    $scope.dbObj= res.data

    var total = 0;
    for(var i = 0; i < res.data.length; i++){
      res.data[i].total = res.data[i].quantity * res.data[i].price;
      total += res.data[i].total;
      $scope.total = total.toFixed(2);
    }
  })

  $scope.updated = () => {
    $state.go('update', {id: id});
  }

  var handler = StripeCheckout.configure({
    key: 'pk_test_wjVLR03Xb2k798iDsT0F66a5',
    image: 'https://img0.etsystatic.com/169/0/14378474/isla_180x180.23775976_83pwf17s.jpg',
    locale: 'auto',
    token: function(token) {
      console.log(token);
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      bearOrder.payMe(token).then((res) => {
        console.log(`this is my res ${res.data}`);
        if (res.data === "cool beans") {
          $state.go('success', {id: id});
        }
        else if(err.type){
          alert('Ohh no! Somethings wrong with your info or payment.')
        }
      })
    }
  });

  $scope.clicker = () => {

    handler.open({
      name: 'BearBones',
      email: $scope.dbObj[0].email,
      description: 'BearBones.com',
      amount: parseInt($scope.total) * 100
    });
  }

  // Close Checkout on page navigation:
  window.addEventListener('popstate', function() {
    handler.close();
  });
})
