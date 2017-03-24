'use strict';

angular.module('bearBones', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngTouch']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home/home.html',
    controller: 'homeCtrl'
  }).state('products', {
    url: '/products',
    templateUrl: './views/products/products.html',
    controller: 'productsCtrl'
  });

  $urlRouterProvider.otherwise('/');
});

angular.module('bearBones').controller('homeCtrl', function ($scope, bearService) {
  $scope.isNavCollapsed = true;
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
});

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {});

angular.module('bearBones').service('bearService', function ($http) {

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

'use strict';

angular.module('bearBones', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngTouch']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home/home.html',
    controller: 'homeCtrl'
  }).state('products', {
    url: '/products',
    templateUrl: './views/products/products.html',
    controller: 'productsCtrl'
  });

  $urlRouterProvider.otherwise('/');
});

angular.module('bearBones').controller('homeCtrl', function ($scope, bearService) {
  $scope.isNavCollapsed = true;
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
});

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {});

angular.module('bearBones').service('bearService', function ($http) {

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