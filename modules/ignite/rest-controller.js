var logger = global.logger;
var _ = require('underscore');
var restService = require('./rest-service');

module.exports = function(){

    var restController = function () {

        var restServiceInstance = new restService();
        var apiMethods = [ "log", "version", "decrement", "increment",
            "cachemetrics", "cas", "prepend", "append", "rep", "rmvall", "remove", "add", "putall", "put", "getall", "get",
            "node", "top", "execute"]

        var me = this;
        _.forEach(apiMethods, function(methodName){
            me[methodName] = function (req, res) {
                try{
                    logger.info(methodName);

                    restServiceInstance.proxyCall(methodName, req.query).then(function(result){
                        res.send(result);
                    });
                }catch(error){
                    logger.error("Error", { "method": methodName, "error": error.message });
                    res.status(417).send(error);
                }
            };
        });
    }

    return new restController();
};