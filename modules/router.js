var _ = require('underscore');

module.exports = function(app,router){

    var igniteRestController = require('./ignite/rest-controller')(app);

    var apiMethods = [ "log", "version", "decrement", "increment", "cachemetrics", "cas",
        "prepend", "append", "rep", "rmvall", "remove", "add", "putall", "put",
        "getall", "get", "node", "top", "execute"]
    _.forEach(apiMethods, function(methodName){
        router.get('/ignite/' + methodName, igniteRestController[methodName]);
    });
}
