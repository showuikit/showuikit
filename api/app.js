require('./global');
var express = require('express');
var app = exports.app = express();
var server = require('http').Server(app);
var config = require(__dirname+'/config');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var pool  = exports.pool = mysql.createPool({
  connectionLimit : config.app.db.connectionLimit,
  host            : config.app.db.host,
  user            : config.app.db.user,
  password        : config.app.db.password,
  database        : config.app.db.database
});

app.use(cors());
app.use(bodyParser.json());

require('./routes');

var port = process.env.PORT || config.app.port;

server.listen(port);
console.log('API ShowUIKit rodando na porta:' + port);
