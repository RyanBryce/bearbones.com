angular.module('bearBones')
.controller('updateOrderCtrl', function($scope, bearService, cart, bearOrder, $state, $stateParams){
  console.log(cart);
  $scope.cart = cart;
  var total = 0;
	for(var i = 0; i < $scope.cart.length; i++){
		$scope.cart[i].total = $scope.cart[i].quantity * $scope.cart[i].price;
		total += $scope.cart[i].total;
		$scope.total = total.toFixed(2);
	}

  const id = $stateParams.id
  bearOrder.getOrder(id).then((res) => {
    console.log(cart);
    console.log('this is the order get response ', res.data);

    const dbObj= res.data[0]
    console.log(dbObj)
    $scope.user = {
      firstName: dbObj.firstname,
      lastName: dbObj.lastname,
      address: dbObj.address,
      address2: dbObj.address2,
      city: dbObj.city,
      state: dbObj.state,
      zip: dbObj.zip,
      email: dbObj.email
    }

    var total = 0;
    for(var i = 0; i < res.data.length; i++){
      res.data[i].total = res.data[i].quantity * res.data[i].price;
      total += res.data[i].total;
      $scope.total = total.toFixed(2);
    }
  })

  $scope.goToPayment = function() {
    $state.go('payment', {id: $scope.orderId});
  }

  $scope.updateOrder = (user, userCart) => {
    // let ids = [];
    console.log(user, userCart);
    // for (var i = 0; i < userCart.length; i++) {
    //   console.log(userCart[i].id);
    //   ids.push(parseInt(userCart[i].id))
    // }
    // console.log(ids);
    if (user.firstName && user.lastName && user.address && user.city && user.state && user.zip && user.email) {
      console.log("this should not fire", user, userCart);
      bearOrder.updateOrder(user, userCart, id)
        .then((orderId) => {
          console.log(orderId.data[0].orderid);
          var orderId = orderId.data[0].orderid
          $state.go('payment', {id: orderId});

        })
      //location.path(/checkout/${orderid})
    }
    else {
      alert('Missing Shipping Info')
    }



  }

})
