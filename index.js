var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res) {
	res.render('index');
});

app.post('/links', function(req, res) {

});

app.get('/links/:id', function(req, res) {
	//need req.body.params

	res.render('/links-show', {links: links});
});

app.get('/links/:hash', function(req, res) {

});








var port = 3000;
app.listen(port, function() {
	console.log('Welcome welcome, you\'re far to find. Welcome to the port of ' + port);
});