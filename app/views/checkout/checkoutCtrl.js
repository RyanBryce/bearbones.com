angular.module('bearBones')
.controller('checkoutCtrl', function($scope, bearService, cart){
  console.log(cart);
  $scope.userCart = cart;
  var total = 0;
	for(var i = 0; i < $scope.userCart.length; i++){
		$scope.userCart[i].total = $scope.userCart[i].quantity * $scope.userCart[i].price;
		total += $scope.userCart[i].total;
		$scope.total = total.toFixed(2);
	}

  $scope.userForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

$scope.userOrder = (user, userCart) => {
  console.log(user, userCart);

}

})
