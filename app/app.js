angular.module('bearBones', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngMessages', 'ngTouch'])
	.config(function( $stateProvider, $urlRouterProvider ) {

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './views/home/home.html',
			controller: 'homeCtrl'
		})
		.state('products', {
			url: '/products',
			templateUrl: './views/products/products.html',
			controller: 'productsCtrl',
			resolve: {
					cart: function(bearService){
					return bearService.getUserCart().then(function(response){
						console.log(response.data);
						return response.data
					})
				}
			}
		})
		.state('cart', {
			url: '/order/cart',
			templateUrl: './views/cart/cart.html',
			controller: 'cartCtrl',
			resolve: {
					cart: function(bearService){
					return bearService.getUserCart().then(function(response){
						console.log(response.data);
						return response.data
					})
				}
			}
		})
		.state('order', {
			url: '/order/shipping',
			templateUrl: './views/checkout/checkout.html',
			controller: 'checkoutCtrl',
			resolve: {
					cart: function(bearService){
					return bearService.getUserCart().then(function(response){
						console.log(response.data);
						return response.data
					})
				}
			}
		})
		.state('payment', {
			url: '/order/payment/:id',
			templateUrl: './views/payme/payme.html',
			controller: 'payMeCtrl',
			resolve: {

					cart: function(bearService){
					return bearService.getUserCart().then(function(response){
						console.log(response.data);
						return response.data
					})
				}
			}
		})
		.state('success', {
			url: '/order/success/:id',
			templateUrl: './views/success/success.html',
			controller: 'success',
			resolve: {

					cart: function(bearService){
					return bearService.getUserCart().then(function(response){
						console.log(response.data);
						return response.data
					})
				}
			}
		})

		$urlRouterProvider.otherwise('/');
});
