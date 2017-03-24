'use strict';

angular.module('bearBones', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngTouch']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  });
  // .state('profile', {
  // 	url: '/profile',
  // 	templateUrl: './views/profile.html',
  // 	controller: 'profileCtrl'
  // });

  $urlRouterProvider.otherwise('/');

  var hi = 'yooooo';
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
      image: ['../img/isla_500x500.23775976_83pwf17s.jpg', 'https://img0.etsystatic.com/142/0/14378474/il_340x270.1128284882_o79m.jpg'][slides.length % 2],
      text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
      id: currIndex++
    });
  };
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
});

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