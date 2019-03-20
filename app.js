
var express = require('express');
var app = express();
var users = require('./routes/users');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/users', users);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;