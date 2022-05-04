var express = require('express');
var router = express.Router();
var donViModel = require('../model/donvi');
var canBoModel = require('../model/canbo');
var admin = require('../middleware/admin');
var vanthulanhdao = require('../middleware/vanthulanhdao');

/**
 * GET /donvi
 * Lấy toàn bộ dữ liệu trong collection donvi 
 */
router.get('/', admin, (req, res, next) => {
  donViModel.find({ benngoai: { $eq: false, } })
    .populate('listbenngoai')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * Lấy danh sách theo đơn vị kèm đơn vị bên ngoài của đơn vị đó
 */
router.get('/dv', vanthulanhdao, (req, res, next) => {
  var user = req.user;
  canBoModel.findOne({ ma: user.ma }, 'donvi')
    .then(data => {
      return donViModel.findById(data.donvi);
    })
    .then(data => {
      return donViModel.find({ $or: [{ benngoai: false }, { _id: { $in: data.listbenngoai } }] });
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send("Lỗi server");
    })
})

/**
 * GET /donvi/:id
 * Lấy 1 document trong collection donvi
 * @param {IdObject} id - ID của đơn vị
 */
router.get("/:id", admin, (req, res, next) => {
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
router.post('/', admin, (req, res, next) => {
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
 * Thêm đơn vị bên ngoài
 */
router.post('/other', vanthulanhdao, (req, res, next) => {
  var { ten, email } = req.body;
  var user = req.userDetail;
  var dataCreated;
  donViModel.create({
    ten, email, benngoai: true,
  })
    .then(data => {
      dataCreated = data;
      return donViModel.findByIdAndUpdate(user.donvi, {
        $push: { listbenngoai: data._id }
      })
    })
    .then(data => {
      res.send(dataCreated);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  console.log(req.body);
  res.send("ok")
});

/**
 * PUT /donvi/:id
 * Cập nhật document trong collection donvi theo id
 * @param {IdObject} id - ID của đơn vị
 * @param {String} ten - tên của đơn vị
 * @param {String/Boolean} benngoai - đơn vị có phải bên ngoài hệ thống không
 * @param {String} ten - tên của đơn vị
 */
router.put('/:id', admin, (req, res, next) => {
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
router.delete('/:id', admin, (req, res, next) => {
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
