const { setTalker, getTalker } = require('../utils');

const postTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await getTalker();
    const newTalker = {
    id: talkers.length + 1,
    name,
    age,
    talk,
  };
  talkers.push(newTalker);
  await setTalker(talkers);
  res.status(201).json(newTalker);
};

module.exports = postTalker; 