require('dotenv').config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //const token = req.body.token || req.query.token || req.headers["x-access-token"];
  const token = req.headers["x-access-token"].slice(7);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.PRIVATEKEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(err);
  }
  return next();
};

module.exports = verifyToken;
