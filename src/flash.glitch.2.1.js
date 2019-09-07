var express = require('express');
var cors = require('cors');

var app = express();

const someFunction = (cardActions) => {
  const doingDate = _(cardActions).filter(function (cardAction) {
    if (!('listAfter' in cardAction.data)) {
      return false
    } else {
      return doingColumn === cardAction.data.listAfter.id
    }
  }).last();
  const toValidateDate = _(cardActions).filter(function (cardAction) {
    if (!('listAfter' in cardAction.data)) {
      return false
    } else {
      return toValidateColumn === cardAction.data.listAfter.id
    }
  }).first();
  const validationDate = _(cardActions).filter(function (cardAction) {
    if (!('listAfter' in cardAction.data)) {
      return false
    } else {
      return validatedColumn === cardAction.data.listAfter.id
    }
  }).first();
  const onlineDate = _(cardActions).filter(function (cardAction) {
    if (!('listAfter' in cardAction.data)) {
      return false
    } else {
      return onlineColumn === cardAction.data.listAfter.id
    }
  }).first();
  return {
    id: cardId,
    create: new Date (1000 * parseInt (cardId.substring (0,8), 16)),
    doing: doingDate ? doingDate.date : null,
    toValidate: toValidateDate ? toValidateDate.date : null,
    validation: validationDate ? validationDate.date : null,
    online: onlineDate ? onlineDate.date : null
  };
}

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
    const dates = someFunction(cardActions);
    response.status(200).send(dates);
  })
  .catch(function (error) {
    response.status(400).send('Invalid request');
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});