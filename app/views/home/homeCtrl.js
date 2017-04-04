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

  $scope.addSlide = function() {
    slides.push({
      image: ['../img/isla_500x500.23775976_83pwf17s.jpg','https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/16907021_265080947265018_6781867280096559104_n.jpg', 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/c126.0.493.493/16124277_380685695644030_5561993793760133120_n.jpg'][slides.length % 3],
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }

  bearService.getUserCart().then((res) => {
    $scope.prodCount = res.data.length
  })

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
