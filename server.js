var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

stormpath.init(app, {
	website: true
});

app.on('stormpath.ready', function() {
	app.listen(3000, 'localhost', function(err) {
		if (err) {
			return console.error(err);
		}
		console.log('Listening to the smooth sounds of port 3000...')
	});
});