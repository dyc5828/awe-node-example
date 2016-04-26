var app = require('express')();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Node');
});

app.listen(port, function () {
  console.log('App listening on', port);
});