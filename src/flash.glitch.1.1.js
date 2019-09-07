var express = require('express');
var cors = require('cors');
var rp = require('request-promise');

var app = express();

app.use(cors({ origin: '*' }));

app.get('/card/:cardId/details', function (request, response) {
  response.status(200).send('Hello, this is card ' + request.params.cardId);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});