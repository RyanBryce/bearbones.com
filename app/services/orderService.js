angular.module('bearBones').service('bearOrder', function($http) {

  //this adds an order into my server from the passing in the userCart and
  this.postOrder = (user, userCart) => {
    return $http({
      method: 'POST',
      url: '/api/order',
      data: {
        user,
        userCart
      }
    })
    // .then((res) => {
    //   console.log(res);
    // })
  };
  this.getOrder = (id) => {
    return $http({
      method: 'GET',
      url: '/api/uorder/' + id,
      data: {
        id
      }
    })
  };
  this.updateOrder = (user, userCart, id) => {
    return $http({
      method: 'PUT',
      url: '/api/update/order/' + id,
      data: {
        user,
        userCart
      }
    })
  };

  this.payMe = (token) => {
    return $http({
      method: 'POST',
      url: "/charge",
      data: {
        token
      }
    })
  }
})
