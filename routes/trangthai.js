var express = require('express');
var router = express.Router();
var trangThaiModel = require('../model/trangthai');

/**
 * GET /trangthai
 * Lấy toàn bộ dữ liệu trong collection trangthai 
 */
router.get('/', (req, res, next) => {
  trangThaiModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
