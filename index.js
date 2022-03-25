const express = require('express');
const bodyParser = require('body-parser');

const getTalkerById = require('./endpoints/getTalkerById');
const getTalkers = require('./endpoints/getTalker');
const login = require('./endpoints/login');
const { auth, 
  validateName,  
  validateAge, 
  validateDate, 
  validateRate,
  validateTalk } = require('./validateData');
  const postTalker = require('./endpoints/postTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', login);

app.post('/talker', auth,
validateName, validateAge, validateTalk, validateRate, validateDate, postTalker);

app.listen(PORT, () => {
  console.log('Online');
});