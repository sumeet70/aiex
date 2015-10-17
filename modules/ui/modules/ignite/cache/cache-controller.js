app.controller('CacheController', ['$scope', 'toaster', 'igniteRestService', function($scope, toaster, igniteRestService) {

    var index = 1;
    $scope.cacheItems = [{id:index, key:"", value:"", casValue:""}];
    $scope.toaster = {
        type: 'success',
        title: 'Title',
        text: 'Message'
    };
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };

    $scope.addItem = function(){
        index = index + 1;
        $scope.cacheItems.push({id:index, key:"", value:""});
    }

    $scope.removeItem = function(id){
        if($scope.cacheItems.length > 1){
            $scope.cacheItems = _.reject($scope.cacheItems, function(item){
                return item.id == id;
            });
        }
    }

    $scope.putall = function(){
        var keyCounter = 0;
        var params = {
            "cacheName": $scope.cacheName,
            "destId" : $scope.nodeId
        };

        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    keyCounter++;
                    params["k"+ keyCounter] = item.key;
                    params["v"+ keyCounter] = item.value;
                }
            });

            if(keyCounter > 0){
                igniteRestService.invoke('putall',params).then(function(result){
                    if(!hasError(result)){
                        $scope.toaster.text="Put Succeeded";
                        $scope.toaster.title="Confirmation";
                    }
                    $scope.pop();
                }).catch(function(){

                });
            }
        }
    }

    $scope.getall = function(method){

        var keyCounter = 0;
        var params = {
            "cacheName": $scope.cacheName,
            "destId" : $scope.nodeId
        };

        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    keyCounter++;
                    params["k"+ keyCounter] = item.key;
                }
            });

            if(keyCounter > 0){
                igniteRestService.invoke('getall',params).then(function(result){

                    if(!hasError(result)){
                        $scope.toaster.title="Confirmation";
                        $scope.toaster.text="Some keys were not found";

                        var allKeysFound = true;
                        if(result && result.response){
                            for(var i=0; i < $scope.cacheItems.length; i++){
                                if(result.response[$scope.cacheItems[i].key]){
                                    $scope.cacheItems[i].value = result.response[$scope.cacheItems[i].key];
                                }else{
                                    if(allKeysFound) {
                                        allKeysFound = false;
                                    }
                                }
                            }
                        }
                        if(allKeysFound){
                            $scope.toaster.text="Entries Retrieved";
                        }
                    }
                    $scope.pop();
                }).catch(function(){

                });
            }
        }
    }

    $scope.rmvall = function(method){

        var keyCounter = 0;
        var params = {
            "cacheName": $scope.cacheName,
            "destId" : $scope.nodeId
        };

        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    keyCounter++;
                    params["k"+ keyCounter] = item.key;
                }
            });

            if(keyCounter > 0){
                igniteRestService.invoke('rmvall',params).then(function(result){

                    if(!hasError(result)) {
                        $scope.toaster.title = "Confirmation";
                        $scope.toaster.text = "Entries Removed";
                    }
                    $scope.pop();
                }).catch(function(){

                });
            }
        }
    }

    $scope.add = function(){
        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    igniteRestService.invoke('add',{
                        key:item.key,
                        val:item.value,
                        "cacheName": $scope.cacheName,
                        "destId" : $scope.nodeId
                    }).then(function(result){

                        if(!hasError(result)) {

                            if (result.response == false) {
                                $scope.toaster.title = "Confirmation";
                                $scope.toaster.text = item.key + " already present";
                            } else {
                                $scope.toaster.title = "Confirmation";
                                $scope.toaster.text = item.key + " added";
                            }
                        }
                        $scope.pop();
                    }).catch(function(){

                    });
                }
            });
        }
    }

    $scope.prepend = function(){
        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    igniteRestService.invoke('prepend',{
                        key:item.key,
                        val:item.value,
                        cacheName:$scope.cacheName,
                        destId:$scope.nodeId
                    }).then(function(result){
                        if(!hasError(result)){}
                        else if(result.response == false){
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= item.key + " not found";
                        }else{
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= "Value prepended";
                        }
                        $scope.pop();
                    }).catch(function(){

                    });
                }
            });
        }
    }

    $scope.append = function(){
        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    igniteRestService.invoke('append',{
                        key:item.key,
                        val:item.value,
                        cacheName:$scope.cacheName,
                        destId:$scope.nodeId
                    }).then(function(result){
                        if(!hasError(result)){}
                        else if(result.response == false){
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= item.key + " not found";
                        }else{
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= "Value appended";
                        }
                        $scope.pop();
                    }).catch(function(){

                    });
                }
            });
        }
    }

    $scope.replace = function(){
        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    igniteRestService.invoke('rep',{
                        key:item.key,
                        val:item.value,
                        cacheName:$scope.cacheName,
                        destId:$scope.nodeId
                    }).then(function(result){
                        if(!hasError(result)){}
                        else if(result.response == false){
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= item.key + " not found";
                        }else{
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= "Value replaced";
                        }
                        $scope.pop();
                    }).catch(function(){

                    });
                }
            });
        }
    }

    $scope.cas = function(){
        if($scope.cacheItems.length > 0){
            _.forEach($scope.cacheItems, function(item){
                if(item.key != ""){
                    igniteRestService.invoke('cas',{
                        key:item.key,
                        val:item.value,
                        val2:item.casValue,
                        cacheName:$scope.cacheName,
                        destId:$scope.nodeId
                    }).then(function(result){
                        if(!hasError(result)){}
                        else if(result.response == false){
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= "key not found or comparison failed.";
                        }else{
                            $scope.toaster.title="Confirmation";
                            $scope.toaster.text= "Value swapped";
                        }
                        $scope.pop();
                    }).catch(function(){

                    });
                }
            });
        }
    }

    var hasError = function(result){

        if(result.error && result.error.indexOf("Cluster group is empty") != -1){
            $scope.toaster.title="Failed";
            $scope.toaster.text= "Cluster group is empty. Check the destination node id.";
            $scope.toaster.type="warning";
            return true;
        }
        if(result.error && result.error.indexOf("Failed to start transaction on non-transactional") != -1){
            $scope.toaster.title="Failed";
            $scope.toaster.text= "Your cache is not transactional. Check grid configuration.";
            $scope.toaster.type="warning";
            return true;
        }else if(result.error && result.error.indexOf("Failed to find cache for given cache name") != -1){
            $scope.toaster.title="Failed";
            $scope.toaster.text= "Named cache not found. Check grid configuration.";
            $scope.toaster.type="warning";
            return true;
        }
        $scope.toaster.type="success";
        return false;
    }
}]);