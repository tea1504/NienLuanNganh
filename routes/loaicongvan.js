var express = require('express');
var router = express.Router();
var loaiCongVanModel = require('../model/loaicongvan');

/**
 * GET /loaicongvan
 * Lấy toàn bộ dữ liệu trong collection loaicongvan 
 */
router.get('/', (req, res, next) => {
  loaiCongVanModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
