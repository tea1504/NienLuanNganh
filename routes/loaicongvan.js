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

/**
 * GET /loaicongvan/:id
 * Lấy 1 document trong collection loaicongvan
 * @param {IdObject} id - ID của loại công văn
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  loaiCongVanModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST /loaicongvan
 * Thêm mới 1 document vào collection loaicongvan
 * @param {String} ten - tên của loại công văn
 * @param {String} viettat - tên viết tắt của loại công văn
 */
router.post('/', (req, res, next) => {
  var ten = req.body.ten;
  var viettat = req.body.viettat;

  loaiCongVanModel.create({
    ten: ten,
    viettat: viettat,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
