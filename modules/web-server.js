var logger = global.logger;

var path = require('path');
var http = require('http');
var os = require('os');
var express = require('express');

var bodyParser = require('body-parser');
var compression = require('compression');
var expiry = require('static-expiry'); //Fix expiry on Windows :(

module.exports = function(app,configData){

    app.set('config',configData);
    var staticDir = path.join(__dirname, './ui');
    var viewsDir = __dirname + './ui';
    app.set('views', viewsDir);
    app.use(bodyParser.json());
    app.use(compression());
    app.use(expiry(app, {dir: staticDir, debug: app.get("env") == 'development'}));
    app.use(express.static(staticDir));

    var port = app.get("config").port;
    var rootPath = app.get("config").rootPath;
    var router = express.Router();

    app.set('port', port);
    app.set('view engine', 'ejs');
    app.use(rootPath,router);

    require('./router')(app,router);

    var server = http.createServer(app).listen(port, function(){
        logger.info("Web Server Ready on port: " + app.get("port"));
    });
    return server;
};