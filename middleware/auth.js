require('dotenv').config();
const jwt = require("jsonwebtoken");
const CanBoModel = require('../model/canbo');

const verifyToken = async (req, res, next) => {
  //const token = req.body.token || req.query.token || req.headers["x-access-token"];
  const token = req.headers["x-access-token"].slice(7);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.PRIVATEKEY);
    var temp = await CanBoModel.findOne({ ma: decoded.ma });
    req.user = decoded;
    req.userDetail = temp;
    console.log(res.userDetail);
  } catch (err) {
    return res.status(401).send(err);
  }

  return next();
};

module.exports = verifyToken;
