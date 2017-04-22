angular.module('bearBones')
.controller('updateOrderCtrl', function($scope, bearService, cart, bearOrder, $state, $stateParams){

  $scope.cart = cart;

  //grabs id from url
  const id = $stateParams.id
  //sends id to server where it updates the order table in my db and then sends back response
  bearOrder.getOrder(id).then((res) => {
    //res is an array of obj and i only needed the data in the first indexed response obj
    const dbObj= res.data[0]

    //this is the user object used to set the values in the input form
    //this set so the users order in my database doesn't get messed up by the user
    //also allows user to see what they input in checkout view to eliminate guess work
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
  //on ng-click checks to make sure there is values on the ng-model
  // updates user order in my db with new form values
  //and grabs correct order id from database to be set in view
  // sends orderid as params to payment view so correct order can be shown
  $scope.updateOrder = (user, userCart) => {
    if (user.firstName && user.lastName && user.address && user.city && user.state && user.zip && user.email) {
      bearOrder.updateOrder(user, userCart, id)
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
