angular.module('bearBones')
.controller('success', function($scope, bearOrder, $stateParams) {
  $scope.id = $stateParams.id
})
