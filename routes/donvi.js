var express = require('express');
var router = express.Router();
var donViModel = require('../model/donvi');

/**
 * GET /donvi
 * Lấy toàn bộ dữ liệu trong collection donvi 
 */
router.get('/', (req, res, next) => {
  donViModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
