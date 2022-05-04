var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const canBoModel = require('../model/canbo');

/* GET users listing. */
router.get('/role', function (req, res, next) {
  const token = req.headers["x-access-token"].slice(7);
  const ma = jwt.verify(token, process.env.PRIVATEKEY).ma;

  canBoModel.findOne({
    ma,
  }, 'laadmin lalanhdao lavanthu donvi')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      return res.status(500).send(err);
    })
});

module.exports = router;
