angular.module('bearBones', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngTouch'])
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
			url: '/cart',
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
		.state('checkout', {
			url: '/checkout',
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

		$urlRouterProvider.otherwise('/');
});
