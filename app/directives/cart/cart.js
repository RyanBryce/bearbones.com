angular.module('bearBones')

.directive('cart', function(){
	return {
		restrict: 'E',
		templateUrl: './directives/cart/cart.html',
		link: function(scope, element, attrs){
			//watches my session cart
			if(scope.cart){
				scope.$watch('cart', function(){
					//sets cart badge number in the nav
					scope.prodCount = scope.cart.length
					var total = 0;
					//loops over cart, multiplies the price by quantity, uses toFixed to limit decimal two digits and assigns the total
					for(var i = 0; i < scope.cart.length; i++){
						scope.cart[i].total = scope.cart[i].quantity * scope.cart[i].price;
						total += scope.cart[i].total;
						scope.total = total.toFixed(2);
					}
				})
			}
		},
		controller: function($scope, bearService){
			//goes to service passing in the item the id the quantity updates thoes values and then the response gets assigned to $scope.cart.
			//the watch is fired off in the link since cart changed and then loops over cart,
			//multiplies the price by quantity, uses toFixed to limit decimal two digits and assigns the total in view
			$scope.updateItem = function(item, id, quantity){
				bearService.updateItem(item, id, quantity).then(function(response){
					$scope.cart = response.data
				})
			}
			//passes in product id into service then server and removes item from req.session.cart then the response gets assigned to $scope.cart.
			//sthe watch is fired off in the link since cart changed and then loops over cart,
			//multiplies the price by quantity, assigns bade number uses toFixed to limit decimal two digits and assigns the total in view
			$scope.removeItem = function(id){
				bearService.removeProd(id).then(function(response){
					$scope.cart = response.data
				})
			}
		}
	}
})
