require("dotenv").config();
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var canBoModel = require('../model/canbo');

router.post('/', (req, res, next) => {

  var ma = req.body.ma;
  var matkhau = req.body.matkhau;

  canBoModel.findOne({
    ma
  })
    .then(data => {
      if (data.comparePassword(matkhau)) {
        var token = jwt.sign({ ma: data.ma }, process.env.PRIVATEKEY, { expiresIn: 60 });
        res.send(token);
      }
      else
        res.status(403).send("Đăng nhập sai");
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

module.exports = router;
