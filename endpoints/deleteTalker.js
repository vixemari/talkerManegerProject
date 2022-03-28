const { getTalker, setTalker } = require('../utils');

const putTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await getTalker();
  const findTalker = talkers.slice((talker) => Number(talker.id) === Number(id));

  talkers.splice(talkers.indexOf(findTalker), 1);

  await setTalker(talkers);
  res.status(204).end();  
};
module.exports = putTalker;
