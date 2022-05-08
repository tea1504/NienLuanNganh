require('dotenv').config();
const jwt = require("jsonwebtoken");
const canBoModel = require('../model/canbo');

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"].slice(7);

  const decoded = jwt.verify(token, process.env.PRIVATEKEY);
  canBoModel.findOne({ ma: decoded.ma }, 'lalanhdao')
    .then(data => {
      if (data.lalanhdao)
        next();
      else
        return res.status(403).send('Không có quyền truy cập');
    }).catch(err => {
      return res.status(500).send(err);
    });
};

module.exports = verifyToken;
