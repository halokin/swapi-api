angularApp.controller('MainCtrl', [
  '$scope',
  'SwapiService',
  function($scope, SwapiService){
    $scope.heading = "Angular app";
    $scope.message = "exercice";

    SwapiService.people()
      .then(function(data) {
        $scope.data = data.data.results;
    });

  }
]);
