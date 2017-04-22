angular.module('bearBones')

.directive('cart', function(){
	return {
		restrict: 'E',
		templateUrl: './directives/cart/cart.html',
		link: function(scope, element, attrs){
			if(scope.cart){
				scope.$watch('cart', function(){
					scope.prodCount = scope.cart.length
					var total = 0;
					for(var i = 0; i < scope.cart.length; i++){
						scope.cart[i].total = scope.cart[i].quantity * scope.cart[i].price;
						total += scope.cart[i].total;
						scope.total = total.toFixed(2);
					}
				})
			}
			// else if (scope.userCart) {
			//
			// }
		},
		controller: function($scope, bearService){


			$scope.updateItem = function(item, id, quantity){
				console.log('in direvtive update', item, id, quantity)
				bearService.updateItem(item, id, quantity).then(function(response){
					console.log('am i getting anything', response);
					$scope.cart = response.data
				})
			}
			//
			$scope.removeItem = function(id){
				console.log('in remove item', id)
				bearService.removeProd(id).then(function(response){
					$scope.cart = response.data
				})
			}
		}
	}
})
