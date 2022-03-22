const express = require('express');
const bodyParser = require('body-parser');

const getTalkerById = require('./endpoints/getTalkerById');
const getTalker = require('./endpoints/getTalker');
const login = require('./endpoints/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getTalker);

app.get('/talker/:id', getTalkerById);

app.post('/login', login);