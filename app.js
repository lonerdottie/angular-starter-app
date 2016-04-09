'use strict';

var express = require('express');

var app = express();


app.use(express.static('app'));
app.use('/assets',express.static('/assets'));
app.use('/node_modules/angular',express.static(__dirname + '/node_modules/angular'));
app.use('/node_modules/angular-animate',express.static(__dirname + '/node_modules/angular-animate'));
app.use('/node_modules/angular-aria',express.static(__dirname + '/node_modules/angular-aria'));
app.use('/node_modules/angular-material',express.static(__dirname + '/node_modules/angular-material'));
app.use('/node_modules/angular-messages',express.static(__dirname + '/node_modules/angular-messages'));


if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
  // [END server]
}

module.exports = app;