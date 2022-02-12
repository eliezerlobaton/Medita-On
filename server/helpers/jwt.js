const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const jwt = {
  generateToken: (user_id) => {
    return sign({}, secrety, {
      subject: `${user_id}`,
      expiresIn: "1h",
    });
  },
  verifyToken: (token) => {
    return verify(token, secrety);
  },
};
module.exports = jwt;