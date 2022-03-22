const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

// app.post('/login ', rescue(async (req, res) => {
//   const { email, password } = req.body;
  
//   if ([email, password].includes(undefined)) {
//     return res.status(200).json({ message: 'O campo "email" é obrigatório' });
//   }
// }))