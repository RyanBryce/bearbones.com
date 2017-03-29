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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('homeCtrl', function ($scope, bearService) {
  $scope.isNavCollapsed = true;

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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    if (res) {
      $scope.products = res;
    }
    // console.log(res[0].imgurl1);
    // for (var i = 0; i < res.length; i++) {
    //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
    //   console.log($scope.img1);
    // }
  });
  // $scope.trustedSrc = function(src) {
  //   console.log(src);
  //     return $sce.trustAsResourceUrl(src);
  //   }
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    // console.log(res[0].imgurl1);
    // for (var i = 0; i < res.length; i++) {
    //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
    //   console.log($scope.img1);
    // }
  });
  // $scope.trustedSrc = function(src) {
  //   console.log(src);
  //     return $sce.trustAsResourceUrl(src);
  //   }
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    // console.log(res[0].imgurl1);
    // for (var i = 0; i < res.length; i++) {
    //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
    //   console.log($scope.img1);
    // }
  });
  $scope.trustedSrc = function (src) {
    console.log(src);
    return $sce.trustAsResourceUrl(src);
  };
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res[0].imgurl1);
    // for (var i = 0; i < res.length; i++) {
    //   $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1)
    //   console.log($scope.img1);
    // }
  });
  $scope.trustedSrc = function (src) {
    console.log(src);
    return $sce.trustAsResourceUrl(src);
  };
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res[0].imgurl1);
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
  $scope.trustedSrc = function (src) {
    console.log(src);
    return $sce.trustAsResourceUrl(src);
  };
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res[0].imgurl1);
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
  $scope.trustSrc = function (src) {
    console.log(src);
    return $sce.trustAsResourceUrl(src);
  };
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res[0].imgurl1);
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res[0].imgurl1);
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res.imgurl1[0]);
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res.imgurl1);
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log($scope.img1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log(res[i].imgurl1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    var img1;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].imgurl1);
      img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log(img1);
    }
    console.log(img1);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    var img1;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].imgurl1);
      img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log(img1);
    }
    console.log(img1);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    var img1;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].imgurl1);
      img1.push($sce.trustAsResourceUrl(res[i].imgurl1));
    }
    console.log(img1);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    var img1;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].imgurl1);
      img1.push($sce.trustAsResourceUrl(res[i].imgurl1));
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    $scope.img1;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].imgurl1);
      $scope.img1.push($sce.trustAsResourceUrl(res[i].imgurl1));
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = $sce.trustAsResourceUrl(res[i].imgurl1);
      console.log(res[i].imgurl1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    for (var i = 0; i < res.length; i++) {
      $scope.img1 = res[i].imgurl1;
      console.log(res[i].imgurl1);
    }
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    for (var i = 0; i < res.length; i++) {
      res[i];
      console.log(res[i].imgurl1);
    }
    $scope.img1 = $sce.trustAsResourceUrl(res.imgurl1);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    console.log(res.imgurl1);
    $scope.img1 = $sce.trustAsResourceUrl(res.imgurl1);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
    $scope.img1 = $sce.trustAsResourceUrl(res.imgurl1);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService, $sce) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = $sce.trustAsResourceUrl(res);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  bearService.getProducts().then(function (res) {
    console.log(res);
    $scope.products = res;
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  bearService.getProducts().then(function (res) {
    console.log(res);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  bearService.getProducts().then(function (res) {
    console.log(res);
  });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  $scope.products = function () {};

  $scope.products();
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  $scope.products = function () {};

  $scope.products();
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  $scope.products = function () {};

  $scope.products();
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  $scope.products();
  $scope.products = function () {};
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  $scope.products = function () {};

  $scope.products();
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').controller('productsCtrl', function ($scope, bearService) {

  $scope.products = 'sup bitches';
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    });
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

angular.module('bearBones').service('bearService', function ($http) {

  this.getFriends = function () {
    return $http({
      method: 'GET',
      url: '/api/profiles'
    });
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
