const { sign, verify } = require("jsonwebtoken");
const secrety = "secret";
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