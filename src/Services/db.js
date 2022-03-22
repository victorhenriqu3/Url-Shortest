var mysql = require('mysql');
var config = require('../config.json')

var db = mysql.createConnection(config.db);

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.export = { db }