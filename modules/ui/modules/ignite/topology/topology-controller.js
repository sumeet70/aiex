app.controller('TopologyController', ['$scope', 'igniteRestService', function($scope, igniteRestService) {

    $scope.$on("reloadTopology", function(){
        $scope.nodes= [];
        igniteRestService.invoke("top").then(function(result){
            _.forEach(result.response, function(node){
                node.consistentId = node.consistentId.split(",");
                $scope.nodes.push(node);
            });
        });
    });

    $scope.$broadcast('reloadTopology');
}]);
