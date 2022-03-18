require('dotenv').config();
const jwt = require("jsonwebtoken");
const canBoModel = require('../model/canbo');

const verifyToken = (req, res, next) => {
  //const token = req.body.token || req.query.token || req.headers["x-access-token"];
  const token = req.headers["x-access-token"].slice(7);

  const decoded = jwt.verify(token, process.env.PRIVATEKEY);
  canBoModel.findOne({ ma: decoded.ma }, 'laadmin')
    .then(data => {
      if (data.laadmin)
        next();
      else
        return res.status(403).send('Không có quyền truy cập');
    }).catch(err => {
      return res.status(500).send(err);
    });
};

module.exports = verifyToken;