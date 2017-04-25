angular.module('bearBones')
.controller('payMeCtrl', function ($scope, bearOrder, $stateParams, cart, $state) {

  $scope.cart = cart

  //being used somewhere???
  $scope.hi = $stateParams.id;

  const id = $stateParams.id;

  //
  bearOrder.getOrder(id).then((res) => {

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
  console.log(process.env);
  var handler = StripeCheckout.configure({
    key: 'pk_test_wjVLR03Xb2k798iDsT0F66a5',
    image: 'https://img0.etsystatic.com/169/0/14378474/isla_180x180.23775976_83pwf17s.jpg',
    locale: 'auto',
    token: function(token) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      // sends token to backend so payment can be made securely
      //if the response come back without errors then user is routed to
      //success page if err then
      bearOrder.payMe(token).then((res) => {

        if (res.data === "cool beans") {
          $state.go('success', {id: id});
        }
        else if(res.err.type){
          alert('Ohh no! Somethings wrong with your info or payment please try again.')
        }
      })
    }
  });
  //fired off on an ng-click an initiate my stripe api payment form
  $scope.clicker = () => {
    handler.open({
      name: 'BearBones',
      email: $scope.dbObj[0].email,
      description: 'BearBones.com',
      amount: parseInt($scope.total) * 100
    });
  }

  // Close Checkout on page navigation: and by clicking form x
  window.addEventListener('popstate', function() {
    handler.close();
  });
})
