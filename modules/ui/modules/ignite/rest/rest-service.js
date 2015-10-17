app.service('igniteRestService', ['$http', '$q', function ($http, $q) {

    this.invoke = function (methodName, params) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: app.getUrl(methodName),
            params: params
        }).success(function (response) {
            deferred.resolve(response)
        }).error(function (error, status, headers) {
            console.log(error);
        });
        return deferred.promise;
    };
}]);