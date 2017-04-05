'use strict';

angular.module('bearBones', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngMessages', 'ngTouch']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home/home.html',
    controller: 'homeCtrl'
  }).state('products', {
    url: '/products',
    templateUrl: './views/products/products.html',
    controller: 'productsCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          console.log(response.data);
          return response.data;
        });
      }
    }
  }).state('cart', {
    url: '/cart',
    templateUrl: './views/cart/cart.html',
    controller: 'cartCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          console.log(response.data);
          return response.data;
        });
      }
    }
  }).state('checkout', {
    url: '/checkout',
    templateUrl: './views/checkout/checkout.html',
    controller: 'checkoutCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          console.log(response.data);
          return response.data;
        });
      }
    }
  });

  $urlRouterProvider.otherwise('/');
});

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
  };
  // cartget
  this.sendToCart = function (url, name, price, id, quantity) {
    return $http({
      method: 'POST',
      url: '/api/cart/',
      data: {
        url: url,
        name: name,
        price: price,
        id: id,
        quantity: quantity
      }
    });
    // .then(response => {
    //   // this.productCount = response.data.length;
    //   // notify(subscribers)
    // })
  };

  this.getUserCart = function (prod) {
    return $http({
      method: 'GET',
      url: '/api/cart/'
    });
  };

  this.removeProd = function (id) {
    return $http({
      method: 'PUT',
      url: '/api/cart/remove',
      data: {
        id: id
      }
    });
  };
  this.updateItem = function (item, id, quantity) {
    return $http({
      method: 'PUT',
      url: '/api/cart',
      data: {
        item: item,
        id: id,
        quantity: quantity
      }
    });
  };

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

angular.module('bearBones').directive('cart', function () {
  return {
    restrict: 'E',
    templateUrl: './directives/cart/cart.html',
    link: function link(scope, element, attrs) {
      if (scope.cart) {
        console.log('directive cart', scope.cart);
        scope.$watch('cart', function () {
          scope.prodCount = scope.cart.length;
          var total = 0;
          for (var i = 0; i < scope.cart.length; i++) {
            console.log('im inside for', scope.cart[i].price);
            scope.cart[i].total = scope.cart[i].quantity * scope.cart[i].price;
            total += scope.cart[i].total;
            scope.total = total.toFixed(2);
            console.log('i am total', total);
          }
        });
      }
      // else if (scope.userCart) {
      //
      // }
    },
    controller: function controller($scope, bearService) {

      $scope.updateItem = function (item, id, quantity) {
        console.log('in direvtive update', item, id, quantity);
        bearService.updateItem(item, id, quantity).then(function (response) {
          console.log('am i getting anything', response);
          $scope.cart = response.data;
        });
      };
      //
      $scope.removeItem = function (id) {
        console.log('in remove item', id);
        bearService.removeProd(id).then(function (response) {
          $scope.cart = response.data;
        });
      };
    }
  };
});

ngular.module('bearBones').directive('ryFooter', function () {
  return {
    restrict: "E",
    templateUrl: './directives/footer/footer.html'
  };
});

angular.module('bearBones').directive('ryNav', function () {
  return {
    restrict: "E",
    templateUrl: './directives/nav/nav.html',
    link: function link(scope, element, attrs) {
      if (scope.cart) {
        console.log('directive cart', scope.cart);
        scope.$watch('cart', function () {
          scope.prodCount = scope.cart.length;
          var total = 0;
          for (var i = 0; i < scope.cart.length; i++) {
            console.log('im inside for', scope.cart[i].price);
            scope.cart[i].total = scope.cart[i].quantity * scope.cart[i].price;
            total += scope.cart[i].total;
            scope.total = total.toFixed(2);
            console.log('i am total', total);
          }
        });
      }
      // else if (scope.userCart) {
      //
      // }
    },
    controller: function controller($scope, bearService) {
      $scope.isNavCollapsed = true;
      $scope.sendToCart = function (url, name, price, id) {
        price = parseInt(price);
        var quantity = 1;
        bearService.sendToCart(url, name, price, id, quantity).then(function (res) {
          $scope.cart = res.data;
        });

        // console.log(prod);
        // cartItem.push(prod)
      };
    }

  };
});

angular.module('bearBones').directive('selectedImg', function () {
  return {
    restrict: 'E',
    templateUrl: './directives/prodImg/prodImg.html',
    controller: function controller($scope) {
      $scope.initImg = true;
      $scope.setSelectedImage = function (image) {
        if (image) {
          $scope.initImg = false;
          console.log(image);
          $scope.selectedImage = image;
          console.log('this is selected ' + $scope.selectedImage);
        }
      };
    }
  };
});

angular.module('bearBones').controller('cartCtrl', function ($scope, bearService, cart) {

  console.log('this is cartCtrl ', cart);
  $scope.cart = cart;
  console.log('this is scope cart', $scope.cart);

  $scope.isNavCollapsed = true;
  //


  //   console.log(res[0].imgurl1);
  //   for (var i = 0; i < res.length; i++) {
  //     $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
  //     console.log($scope.img1);
  //   }
  // })
  // $scope.trustedSrc = function(src) {
  //   console.log(src);
  //     return $sce.trustAsResourceUrl(src);
  //   }

});

angular.module('bearBones').controller('checkoutCtrl', function ($scope, bearService, cart) {
  console.log(cart);
  $scope.userCart = cart;
  var total = 0;
  for (var i = 0; i < $scope.userCart.length; i++) {
    $scope.userCart[i].total = $scope.userCart[i].quantity * $scope.userCart[i].price;
    total += $scope.userCart[i].total;
    $scope.total = total.toFixed(2);
  }

  $scope.userForm = function (isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }
  };

  $scope.userOrder = function (user, userCart) {
    console.log(user, userCart);
  };
});

angular.module('bearBones').controller('homeCtrl', function ($scope, bearService) {
  // $scope.isNavCollapsed = true;
  // $scope.isCollapsed = false;
  // $scope.isCollapsedHorizontal = false;

  //slider
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function () {
    slides.push({
      image: ['../img/isla_500x500.23775976_83pwf17s.jpg', 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/16907021_265080947265018_6781867280096559104_n.jpg', 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/c126.0.493.493/16124277_380685695644030_5561993793760133120_n.jpg'][slides.length % 3],
      text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }

  bearService.getUserCart().then(function (res) {
    $scope.prodCount = res.data.length;
  });

  // bearService.getProducts().then((res) => {
  //   console.log(res);
  //   if (res) {
  //     $scope.products = res
  //   }
  //   console.log(res[0].imgurl1);
  //   for (var i = 0; i < res.length; i++) {
  //     $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
  //     console.log($scope.img1);
  //   }
  // })
});

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce, $interval, cart) {

  $scope.isNavCollapsed = true;

  $scope.cart = cart;

  bearService.getProducts().then(function (res) {
    // console.log(res);

    $scope.products = res;
    // console.log(res);

    // console.log(res[0].imgurl1);
    // for (var i = 0; i < res.length; i++) {
    //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
    //   console.log($scope.img1);
    // }
  });

  $scope.setSelectedImage = function (image) {
    console.log(image);
    $scope.selectedImage = image;
    console.log('this is selected ' + $scope.selectedImage);
  };
});