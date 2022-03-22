const rescue = require('express-rescue'); // trata o erro

const talkerUtils = require('../utils');

const getTalker = rescue(async (req, res) => {
  const talker = await talkerUtils.getTalker();
  res.status(200).json(talker);
  if (!talker) {
    return res.status(200);
  }
});

module.exports = getTalker;