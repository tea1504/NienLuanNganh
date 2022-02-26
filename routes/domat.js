var express = require('express');
var router = express.Router();
var doMatModel = require('../model/domat');

/**
 * GET /domat
 * Lấy toàn bộ dữ liệu trong collection domat 
 */
router.get('/', (req, res, next) => {
  doMatModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * GET /domat/:id
 * Lấy 1 document trong collection domat
 * @param {IdObject} id - ID của document
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  doMatModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST /domat
 * Thêm mới 1 document vào collection domat
 * @param {String} ten - tên của độ mật
 */
router.post('/', (req, res, next) => {
  var ten = req.body.ten;

  doMatModel.create({
    ten: ten,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT /domat/:id
 * Cập nhật document trong collection domat theo id
 * @param {IdObject} id - ID của độ mật
 * @param {String} ten - Tên của độ mật
 */
router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  var ten = req.body.ten;

  doMatModel.findByIdAndUpdate(id, {
    ten: ten,
  })
    .then(data => {
      return doMatModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  doMatModel.findByIdAndDelete(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
