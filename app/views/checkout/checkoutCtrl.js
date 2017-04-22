angular.module('bearBones')
.controller('checkoutCtrl', function($scope, bearService, cart, bearOrder, $state){
  //grabs returned cart from resolve in app.js brought in  ^   nav directive is watching this value
  $scope.cart = cart;

  var total = 0;

	for(var i = 0; i < $scope.cart.length; i++){
		$scope.cart[i].total = $scope.cart[i].quantity * $scope.cart[i].price;
		total += $scope.cart[i].total;
		$scope.total = total.toFixed(2);
	}

  //passes the orderid into the url to be accsessed in payment view by $stateParams
  $scope.goToPayment = function() {
    $state.go('payment', {id: $scope.orderId});
  }
  //fired off by button using ng-click in checkout html
  $scope.userOrder = (user, userCart) => {
    //grabs the user order obj and cart obj (set by ng-model) to send into order service to eventually be used to add order to the db order table and join order table.
    // also wont allow view to be changed/button clicked unless if() statement passes and response comes back from server
    //if if() fails then user will be shown alert. also if the if() passes data will be sent into order service and into database
    if (user.firstName && user.lastName && user.address && user.city && user.state && user.zip && user.email) {
      bearOrder.postOrder(user, userCart)
        .then((orderId) => {
          var orderId = orderId.data[0].orderid
          $state.go('payment', {id: orderId});
        })
    }
    else {
      alert('Missing Shipping Info')
    }
  }
})
