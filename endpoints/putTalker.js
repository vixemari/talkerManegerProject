const { getTalker, setTalker } = require('../utils');

const putTalker = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = await getTalker();
  const findTalker = talkers.findIndex((talker) => Number(talker.id) === Number(id));

  talkers[findTalker] = { ...talkers[findTalker], name, age, talk };

  await setTalker(talkers);
  res.status(200).json(talkers[findTalker]);
};
module.exports = putTalker;
