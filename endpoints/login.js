const crypto = require('crypto');
const rescue = require('express-rescue'); // trata o erro

const validateEmail = (email) => {
  const regexValidation = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regexValidation.test(email);
};

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!validateEmail(email)) {
    return res.status(400)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = login;
