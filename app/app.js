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
			controller: 'productsCtrl'
		})
		.state('cart', {
			url: '/cart',
			templateUrl: './views/cart/cart.html',
			controller: 'productsCtrl'
		})

		$urlRouterProvider.otherwise('/');
});
