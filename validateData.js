const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  return next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
    return next();
};
const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
    return next();
};

const DateFormat = (date) => {
  const regexValidation = /^\d{4}-\d{2}-\d{2}$/;
  return regexValidation.test(date);
};
const validateDate = (req, res, next) => {
  const { watchedAt } = req.body;
  if (!DateFormat(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "YYYY-MM-DD"' });
  }
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  next();
};

const validateRate = (req, res, next) => {
  const { rate } = req.body;
   if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  next();
};

const validateTalk = (req, res, next) => {
  const { talk, watchedAt, rate } = req.body;
  if (!talk || !watchedAt || !rate) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  
  next();
};

module.exports = { auth, validateName, validateAge, validateDate, validateRate, validateTalk };