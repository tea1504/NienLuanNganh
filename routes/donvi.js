var express = require('express');
var router = express.Router();
var donViModel = require('../model/donvi');
var canBoModel = require('../model/canbo');

/**
 * GET /donvi
 * Lấy toàn bộ dữ liệu trong collection donvi 
 */
router.get('/', (req, res, next) => {
  donViModel.find({ benngoai: { $eq: false, } })
    .populate('listbenngoai.list')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * GET /donvi/:id
 * Lấy 1 document trong collection donvi
 * @param {IdObject} id - ID của đơn vị
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  donViModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST /donvi
 * Thêm mới 1 document vào collection donvi
 * @param {String} ten - tên của đơn vị
 * @param {String/Boolean} benngoai - đơn vị có phải bên ngoài hệ thống không
 * @param {String} ten - tên của đơn vị
 */
router.post('/', (req, res, next) => {
  var { ten, list, email, benngoai } = req.body;

  donViModel.create({
    ten, 'listbenngoai.list': list, email, benngoai,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT /donvi/:id
 * Cập nhật document trong collection donvi theo id
 * @param {IdObject} id - ID của đơn vị
 * @param {String} ten - tên của đơn vị
 * @param {String/Boolean} benngoai - đơn vị có phải bên ngoài hệ thống không
 * @param {String} ten - tên của đơn vị
 */
router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  var ten = req.body.ten;
  var benngoai = req.body.benngoai;
  var email = req.body.email;

  donViModel.findByIdAndUpdate(id, {
    ten: ten,
    benngoai: benngoai,
    email: email,
  })
    .then(data => {
      return donViModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE /donvi/:id
 * Xóa 1 document trong collection donvi
 * @param {IdObject} id - ID của đơn vị
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  canBoModel.deleteMany({
    donvi: id,
  })
    .then(data => {
      return donViModel.findByIdAndDelete(id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
