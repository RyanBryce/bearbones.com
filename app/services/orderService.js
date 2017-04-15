angular.module('bearBones').service('bearOrder', function($http) {
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
