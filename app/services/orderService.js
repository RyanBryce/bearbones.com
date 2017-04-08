angular.module('bearBones').service('bearOrder', function($http) {
  this.postOrder = (user, userCart) => {
    return $http({
      method: 'POST',
      url: '/api/order',
      data: {
        user,
        userCart
      }
    }).then((res) => {
      console.log(res);
    })
  }
})
