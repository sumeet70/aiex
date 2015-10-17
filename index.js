//Setup env variable
process.env.PWD = process.env.PWD || process.cwd();
var arguments = process.argv.slice(2);
var env = process.env.NODE_ENV;
if(env === undefined){ env = "development"; }

var app = require('express')();
app.set('env',env);


//Load Configuration File
var jsonFile = require('json-file-plus');
var path = require('path');
var configFile = path.join(process.cwd(), 'config.json');
if(arguments.length > 0){ configFile = arguments[0]; }

jsonFile(configFile, function (err, file) {
    if (err) { console.log(err); }
    global.logger = require('./modules/logger')(env);
    var activeConfig = file.data[env];

    global.logger.info("Configuration loaded successfully from %s", configFile, activeConfig);
    require('./modules/web-server')(app, activeConfig);
});