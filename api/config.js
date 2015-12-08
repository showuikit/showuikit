var config = {};

config.app = {};
config.app.port = 8090;
config.app.db = {
	connectionLimit:100,
	host:'localhost',
	user:'root',
	password:'root',
	database:'showuikit'
};

module.exports = config;
