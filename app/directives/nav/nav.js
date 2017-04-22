angular.module('bearBones')
  .directive('ryNav', () => {
    return {
      restrict: "E",
      templateUrl: './directives/nav/nav.html',
      link: function(scope, element, attrs){
        if(scope.cart){
          //watches my session cart
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
      },
      controller: function($scope, bearService){
        //mystical Luke code
        $scope.quantityOptions = [1, 2, 3, 4, 5]
        $scope.isNavCollapsed = true;
        $scope.sendToCart = (url, name, price, id) => {
        price = parseInt(price)
        const quantity = 1;
        bearService.sendToCart(url, name, price, id, quantity).then((res) => {
          $scope.cart = res.data
        })
        }
      }
    }
  })
