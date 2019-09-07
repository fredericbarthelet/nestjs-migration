var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors({ origin: '*' }));

app.get('/card/:cardId/details', function (request, response) {
  const trelloApi = 'https://api.trello.com/1';
  const token = request.query.token;
  const getReq = {
    uri: `${trelloApi}/cards/${cardId}/actions`,
    qs: {
      key: process.env.TRELLO_APPLICATION_KEY,
      token: token
    },
    json: true
  };

  rp.get(getReq)
  .then(function (cardActions) {
    response.status(200).send(cardActions);
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});