app.controller('IgniteRestController', ['$scope', 'igniteRestService', function($scope, igniteRestService) {
    $scope.loadTopology = function(){
        $scope.$broadcast('reloadTopology');
    }
}]);