angular.module('bearBones')
.service('bearService', function( $http ) {

  this.getProducts = () => {
  	return $http({
      method: 'GET',
      url: '/api/products'
    }).then(res => res.data)
  };

    // this.login = function( name, password ) {
    //   return $http({
    //     method: 'POST',
    //     url: '/api/login',
    //     data: {
    //       name,
    //       password
    //     }
    //   })
    // };

    // this.getFriends = function() {
    // 	return $http({
    //     method: 'GET',
    //     url: '/api/profiles'
    //   })
    // };

});
