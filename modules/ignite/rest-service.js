var q = require('q');
var _ = require('underscore');
var logger = global.logger;
var request = require("request");
var rootUrl = "http://" + process.env.IGNITE_REST + "/ignite?cmd=" || "http://localhost:8080/ignite?cmd=";

module.exports = function() {
    this.proxyCall = function(methodName, query){
        var deferred = q.defer();

        request({
            method:"GET",
            uri: rootUrl + methodName,
            qs: query
            } , function (error, response, body) {
            if (error) {
                logger.info(error);
                deferred.reject(error);
            } else {
                logger.info("Resolved");
                deferred.resolve(body);
            }
        });

        return deferred.promise;
    }
};
