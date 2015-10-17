var winston = require('winston');

module.exports = function(){

    var logger;
    var env = global.env;
    if(env === undefined){
        env = 'development';
    }

    if(env === 'development'){
        winston.remove(winston.transports.Console);

        logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    timestamp:true,
                    level:'debug'
                })
            ]
        });
    }else{

    }
    global.logger = logger;
    return logger;
};
