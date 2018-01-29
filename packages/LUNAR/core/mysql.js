var mysql = require('mysql');

module.exports = {
	Handle: null,

	Connect: function (callback) {
		this.Handle = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'lunar',
			debug: false
		});

		this.Handle.connect(function (e) {
			console.log("\x1b[36m[MYSQL]\x1b[37m Connction successful");
			if (!e) {
				callback();
			}
			else console.log("\x1b[36m[MYSQL]\x1b[37m DATABASE ERROR!" + e);
		});

		this.Handle.on('error', function (err) {
			console.log("\x1b[31m Warning: SQL ERROR " + err.code);
		});
	}
};
