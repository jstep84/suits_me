var express = require('express');
var stormpath = require('stormpath');

var app = express();

stormpathinit(app, {
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