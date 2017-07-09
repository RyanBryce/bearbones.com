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
          return response.data;
        });
      }
    }
  }).state('cart', {
    url: '/order/cart',
    templateUrl: './views/cart/cart.html',
    controller: 'cartCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          return response.data;
        });
      }
    }
  }).state('order', {
    url: '/order/shipping',
    templateUrl: './views/checkout/checkout.html',
    controller: 'checkoutCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          return response.data;
        });
      }
    }
  }).state('payment', {
    url: '/order/payment/:id',
    templateUrl: './views/payme/payme.html',
    controller: 'payMeCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          return response.data;
        });
      }
    }
  }).state('success', {
    url: '/order/success/:id',
    templateUrl: './views/success/success.html',
    controller: 'success',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          return response.data;
        });
      }
    }
  }).state('update', {
    url: '/order/update/:id',
    templateUrl: './views/updateOrder/updateOrder.html',
    controller: 'updateOrderCtrl',
    resolve: {
      cart: function cart(bearService) {
        return bearService.getUserCart().then(function (response) {
          return response.data;
        });
      }
    }
  });

  $urlRouterProvider.otherwise('/');
});

angular.module('bearBones').controller('cartCtrl', function ($scope, bearService, cart) {

  $scope.cart = cart;

  //for colapsed nave bar using ui-bootsrap
  $scope.isNavCollapsed = true;
});

angular.module('bearBones').controller('checkoutCtrl', function ($scope, bearService, cart, bearOrder, $state) {
  //grabs returned cart from resolve in app.js brought in  ^   nav directive is watching this value
  $scope.cart = cart;

  var total = 0;

  for (var i = 0; i < $scope.cart.length; i++) {
    $scope.cart[i].total = $scope.cart[i].quantity * $scope.cart[i].price;
    total += $scope.cart[i].total;
    $scope.total = total.toFixed(2);
  }

  //passes the orderid into the url to be accsessed in payment view by $stateParams
  $scope.goToPayment = function () {
    $state.go('payment', { id: $scope.orderId });
  };
  //fired off by button using ng-click in checkout html
  $scope.userOrder = function (user, userCart) {
    //grabs the user order obj and cart obj (set by ng-model) to send into order service to eventually be used to add order to the db order table and join order table.
    // also wont allow view to be changed/button clicked unless if() statement passes and response comes back from server
    //if if() fails then user will be shown alert. also if the if() passes data will be sent into order service and into database
    if (user.firstName && user.lastName && user.address && user.city && user.state && user.zip && user.email) {
      bearOrder.postOrder(user, userCart).then(function (orderId) {
        var orderId = orderId.data[0].orderid;
        $state.go('payment', { id: orderId });
      });
    } else {
      alert('Missing Shipping Info');
    }
  };
});

angular.module('bearBones').controller('homeCtrl', function ($scope, bearService) {

  //slider
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  //ui boostrap carusel
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
  //sets the cart array length so you can see from home screen
  bearService.getUserCart().then(function (res) {
    $scope.prodCount = res.data.length;
  });
});

angular.module('bearBones').controller('payMeCtrl', function ($scope, bearOrder, $stateParams, cart, $state) {

  $scope.cart = cart;

  //being used somewhere???
  $scope.hi = $stateParams.id;

  var id = $stateParams.id;

  //
  bearOrder.getOrder(id).then(function (res) {

    $scope.dbObj = res.data;
    var total = 0;
    for (var i = 0; i < res.data.length; i++) {
      res.data[i].total = res.data[i].quantity * res.data[i].price;
      total += res.data[i].total;
      $scope.total = total.toFixed(2);
    }
  });

  $scope.updated = function () {
    $state.go('update', { id: id });
  };

  var handler = StripeCheckout.configure({
    key: 'pk_test_wjVLR03Xb2k798iDsT0F66a5',
    image: 'https://img0.etsystatic.com/169/0/14378474/isla_180x180.23775976_83pwf17s.jpg',
    locale: 'auto',
    token: function token(_token) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      // sends token to backend so payment can be made securely
      //if the response come back without errors then user is routed to
      //success page if err then
      bearOrder.payMe(_token).then(function (res) {

        if (res.data === "cool beans") {
          $state.go('success', { id: id });
        } else if (res.err.type) {
          alert('Ohh no! Somethings wrong with your info or payment please try again.');
        }
      });
    }
  });
  //fired off on an ng-click an initiate my stripe api payment form
  $scope.clicker = function () {
    handler.open({
      name: 'BearBones',
      email: $scope.dbObj[0].email,
      description: 'BearBones.com',
      amount: parseInt($scope.total) * 100
    });
  };

  // Close Checkout on page navigation: and by clicking form x
  window.addEventListener('popstate', function () {
    handler.close();
  });
});

angular.module('bearBones').controller('success', function ($scope, bearOrder, $stateParams) {
  $scope.id = $stateParams.id;
});

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce, $interval, cart) {

  $scope.isNavCollapsed = true;
  //here using resolve and injecting cart into contorller used by nav to watch and assign badge among other things
  $scope.cart = cart;

  //my products are being grabbed from my products table in my db and set into view two way data binding
  bearService.getProducts().then(function (res) {
    $scope.products = res;
  });
  //used to change selected img and allow it to be changed on a ng-click in a directive 
  $scope.setSelectedImage = function (image) {
    $scope.selectedImage = image;
  };
});

angular.module('bearBones').controller('updateOrderCtrl', function ($scope, bearService, cart, bearOrder, $state, $stateParams) {

  $scope.cart = cart;

  //grabs id from url
  var id = $stateParams.id;
  //sends id to server where it updates the order table in my db and then sends back response
  bearOrder.getOrder(id).then(function (res) {
    //res is an array of obj and i only needed the data in the first indexed response obj
    var dbObj = res.data[0];

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
    };

    var total = 0;
    for (var i = 0; i < res.data.length; i++) {
      res.data[i].total = res.data[i].quantity * res.data[i].price;
      total += res.data[i].total;
      $scope.total = total.toFixed(2);
    }
  });
  //on ng-click checks to make sure there is values on the ng-model
  // updates user order in my db with new form values
  //and grabs correct order id from database to be set in view
  // sends orderid as params to payment view so correct order can be shown
  $scope.updateOrder = function (user, userCart) {
    if (user.firstName && user.lastName && user.address && user.city && user.state && user.zip && user.email) {
      bearOrder.updateOrder(user, userCart, id).then(function (orderId) {
        var orderId = orderId.data[0].orderid;
        $state.go('payment', { id: orderId });
      });
    } else {
      alert('Missing Shipping Info');
    }
  };
});

angular.module('bearBones').directive('cart', function () {
  return {
    restrict: 'E',
    templateUrl: './directives/cart/cart.html',
    link: function link(scope, element, attrs) {
      //watches my session cart
      if (scope.cart) {
        scope.$watch('cart', function () {
          //sets cart badge number in the nav
          scope.prodCount = scope.cart.length;
          var total = 0;
          //loops over cart, multiplies the price by quantity, uses toFixed to limit decimal two digits and assigns the total
          for (var i = 0; i < scope.cart.length; i++) {
            scope.cart[i].total = scope.cart[i].quantity * scope.cart[i].price;
            total += scope.cart[i].total;
            scope.total = total.toFixed(2);
          }
        });
      }
    },
    controller: function controller($scope, bearService) {
      //goes to service passing in the item the id the quantity updates thoes values and then the response gets assigned to $scope.cart.
      //the watch is fired off in the link since cart changed and then loops over cart,
      //multiplies the price by quantity, uses toFixed to limit decimal two digits and assigns the total in view
      $scope.updateItem = function (item, id, quantity) {
        bearService.updateItem(item, id, quantity).then(function (response) {
          $scope.cart = response.data;
        });
      };
      //passes in product id into service then server and removes item from req.session.cart then the response gets assigned to $scope.cart.
      //sthe watch is fired off in the link since cart changed and then loops over cart,
      //multiplies the price by quantity, assigns bade number uses toFixed to limit decimal two digits and assigns the total in view
      $scope.removeItem = function (id) {
        bearService.removeProd(id).then(function (response) {
          $scope.cart = response.data;
        });
      };
    }
  };
});

angular.module('bearBones').directive('ryFooter', function () {
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
        //watches my session cart
        scope.$watch('cart', function () {
          scope.prodCount = scope.cart.length;
          var total = 0;
          for (var i = 0; i < scope.cart.length; i++) {
            scope.cart[i].total = scope.cart[i].quantity * scope.cart[i].price;
            total += scope.cart[i].total;
            scope.total = total.toFixed(2);
          }
        });
      }
    },
    controller: function controller($scope, bearService) {
      //mystical Luke code
      $scope.quantityOptions = [1, 2, 3, 4, 5];
      $scope.isNavCollapsed = true;
      $scope.sendToCart = function (url, name, price, id) {
        price = parseInt(price);
        var quantity = 1;
        bearService.sendToCart(url, name, price, id, quantity).then(function (res) {
          $scope.cart = res.data;
        });
      };
    }
  };
});

angular.module('bearBones').directive('selectedImg', function () {
  return {
    restrict: 'E',
    templateUrl: './directives/prodImg/prodImg.html',
    controller: function controller($scope) {
      //allows image to be set on click
      $scope.initImg = true;
      $scope.setSelectedImage = function (image) {
        if (image) {
          $scope.initImg = false;
          $scope.selectedImage = image;
        }
      };
    }
  };
});

angular.module('bearBones').service('bearOrder', function ($http) {

  //this adds an order into my server from the passing in the userCart and
  this.postOrder = function (user, userCart) {
    return $http({
      method: 'POST',
      url: '/api/order',
      data: {
        user: user,
        userCart: userCart
      }
    });
    // .then((res) => {
    //   console.log(res);
    // })
  };
  this.getOrder = function (id) {
    return $http({
      method: 'GET',
      url: '/api/uorder/' + id,
      data: {
        id: id
      }
    });
  };
  this.updateOrder = function (user, userCart, id) {
    return $http({
      method: 'PUT',
      url: '/api/update/order/' + id,
      data: {
        user: user,
        userCart: userCart
      }
    });
  };

  this.payMe = function (token) {
    return $http({
      method: 'POST',
      url: "/charge",
      data: {
        token: token
      }
    });
  };
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
});