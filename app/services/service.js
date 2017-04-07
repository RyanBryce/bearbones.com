angular.module('bearBones')
.service('bearService', function( $http ) {

  this.getProducts = () => {
  	return $http({
      method: 'GET',
      url: '/api/products'
    }).then(res => res.data)
  };
// cartget
  this.sendToCart = (url, name, price, id, quantity) => {
    return $http({
      method: 'POST',
      url: '/api/cart/',
      data: {
        url,
        name,
        price,
        id,
        quantity
      }
    })
    // .then(response => {
    //   // this.productCount = response.data.length;
    //   // notify(subscribers)
    // })
  };

  this.getUserCart = (prod) => {
    return $http({
      method: 'GET',
      url: '/api/cart/'
    })
  };

  this.removeProd = function(id){
		return $http({
			method: 'PUT',
			url: '/api/cart/remove',
			data: {
				id
			}
		})
	};
  this.updateItem = function(item, id, quantity){
		return $http({
			method: 'PUT',
			url: '/api/cart',
			data: {
        item,
        id,
        quantity
      }
		})
	}







  // var Items = '';
  // var Total = 0
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
