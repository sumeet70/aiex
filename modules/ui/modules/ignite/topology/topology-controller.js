app.controller('TopologyController', ['$scope', 'igniteRestService', function($scope, igniteRestService) {

    $scope.$on("reloadTopology", function(){

        $scope.nodes= [];
        $scope.displayedNodes = [];
        $scope.selectedNode = {};

        $scope.attributes = [];
        $scope.displayedAttributes = [];

        $scope.metrics = [];
        $scope.displayedMetrics = [];

        $scope.$watch('displayedNodes', function(node) {
            node.filter(function(r) {
                if (r.isSelected) {
                    $scope.selectedNode = r;
                    $scope.attributes = [];
                    $scope.metrics = [];

                    igniteRestService.invoke("node",{
                        attr:true,
                        mtr:true,
                        id: r.nodeId
                    }).then(function(result){
                        for (var property in result.response.attributes ) {
                            $scope.attributes.push({
                                name:property,
                                val:result.response.attributes[property]
                            });
                        }
                        $scope.displayedAttributes = [].concat($scope.attributes);

                        for (var property in result.response.metrics ) {
                            $scope.metrics.push({
                                name:property,
                                val:result.response.metrics[property]
                            });
                        }
                        $scope.displayedMetrics = [].concat($scope.metrics);
                    });
                }
            })
        }, true);

        igniteRestService.invoke("top").then(function(result){
            _.forEach(result.response, function(node){
                node.consistentId = node.consistentId.split(",");
                $scope.nodes.push(node);
            });
            $scope.displayedNodes = [].concat($scope.nodes);
        });

    });

    $scope.$broadcast('reloadTopology');

}]);
