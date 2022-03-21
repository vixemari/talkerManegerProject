const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const talkerUtils = require('./utils');

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

app.get('/talker', rescue(async (req, res) => {
  const talker = await talkerUtils.getTalker();
  res.status(200).json(talker);
  if (!talker) {
    return res.status(200);
  }
}));

app.get('/talker/:id', rescue(async (req, res) => {
  const talkers = await talkerUtils.getTalker();
  const talker = await talkers.find(({ id }) => id === req.params.id);

  if (!talker) { 
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } 
    return res.status(200).json(talker);
}));