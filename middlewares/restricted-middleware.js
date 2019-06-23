const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if (err) {
        // invalid token
        res.status(401).json({ err, message: "Invalid Token, Credentials." });
      } else {
        // valid token
        req.user = {
          username: decodeToken.username
        };
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "No token provided, must be set on the Authorization Header."
    });
  }
};
