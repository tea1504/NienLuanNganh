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

/**
 * GET /trangthai/:id
 * Lấy 1 document trong collection trangthai
 * @param {IdObject} id - ID của document
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  trangThaiModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST /trangthai
 * Thêm mới 1 document vào collection trangthai
 * @param {String} ten - tên của trạng thái
 */
router.post('/', (req, res, next) => {
  var ten = req.body.ten;

  trangThaiModel.create({
    ten: ten,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
