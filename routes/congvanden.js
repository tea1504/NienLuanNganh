var express = require('express');
var router = express.Router();
var congVanDenModel = require('../model/congvanden');

/**
 * GET /congvanden
 * Lấy toàn bộ dữ liệu trong collection congvanden 
 */
router.get('/', (req, res, next) => {
  congVanDenModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

// /**
//  * GET /domat/:id
//  * Lấy 1 document trong collection domat
//  * @param {IdObject} id - ID của document
//  */
// router.get("/:id", (req, res, next) => {
//   var id = req.params.id;

//   doMatModel.findById(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

/**
 * POST /congvanden
 * Thêm mới 1 document vào collection congvanden
 */
router.post('/', (req, res, next) => {
  var ten = req.body.ten;

  congVanDenModel.create({
    ten: ten,
    'xuly.0.noidung': '123'
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// /**
//  * PUT /domat/:id
//  * Cập nhật document trong collection domat theo id
//  * @param {IdObject} id - ID của độ mật
//  * @param {String} ten - Tên của độ mật
//  */
// router.put('/:id', (req, res, next) => {
//   var id = req.params.id;
//   var ten = req.body.ten;

//   doMatModel.findByIdAndUpdate(id, {
//     ten: ten,
//   })
//     .then(data => {
//       return doMatModel.findById(data.id);
//     })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

// /**
//  * DELETE /domat/:id
//  * Xóa 1 document trong collection 
//  * @param {IdObject} id - ID của độ mật
//  */
// router.delete('/:id', (req, res, next) => {
//   var id = req.params.id;

//   doMatModel.findByIdAndDelete(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

module.exports = router;
