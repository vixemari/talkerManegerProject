const rescue = require('express-rescue'); // trata o erro

const talkerUtils = require('../utils');

const getTalkerByID = rescue(async (req, res) => { 
  const { id } = req.params;
  const talkers = await talkerUtils.getTalker();
  const talkerID = talkers.find((talker) => talker.id === Number(id));
  
  if (!talkerID) { 
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } 
  return res.status(200).json(talkerID);
});

module.exports = getTalkerByID;