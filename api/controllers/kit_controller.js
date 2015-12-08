var fs = require('fs');
var pool = require('../app').pool;

module.exports.list = function(req, res) {
	pool.query('SELECT * FROM kit order by date_created DESC',function(err, rows, fields) {
	  	if (err) throw err;
	  	res.jsonp(rows);
	});
};
