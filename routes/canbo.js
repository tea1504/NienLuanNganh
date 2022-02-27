var express = require('express');
var router = express.Router();
var canBoModel = require('../model/canbo');

/**
 * GET /canbo
 * Lấy toàn bộ dữ liệu trong collection canbo 
 */
router.get('/', (req, res, next) => {
  canBoModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * GET /canbo/:id
 * Lấy 1 document trong collection canbo
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  canBoModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST /canbo
 * Thêm mới 1 document vào collection canbo
 */
router.post('/', (req, res, next) => {
  var donvi = req.body.donvi;
  var ma = req.body.ma;
  var holot = req.body.holot;
  var ten = req.body.ten;
  var email = req.body.email;
  var sdt = req.body.sdt;
  var laadmin = req.body.laadmin;
  var lalanhdao = req.body.lalanhdao;
  var lavanthu = req.body.lavanthu;

  canBoModel.create({
    donvi, ma, holot, ten, email, sdt, laadmin, lalanhdao, lavanthu,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT /canbo/:id
 * Cập nhật document trong collection canbo theo id
 */
router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  var donvi = req.body.donvi;
  var ma = req.body.ma;
  var holot = req.body.holot;
  var ten = req.body.ten;
  var email = req.body.email;
  var sdt = req.body.sdt;
  var laadmin = req.body.laadmin;
  var lalanhdao = req.body.lalanhdao;
  var lavanthu = req.body.lavanthu;

  canBoModel.findByIdAndUpdate(id, {
    donvi, ma, holot, ten, email, sdt, laadmin, lalanhdao, lavanthu,
  })
    .then(data => {
      return canBoModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE /domat/:id
 * Xóa 1 document trong collection 
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  canBoModel.findByIdAndDelete(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
