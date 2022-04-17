require('dotenv').config();
const jwt = require("jsonwebtoken");
var express = require('express');
var router = express.Router();
var canBoModel = require('../model/canbo');
var admin = require("../middleware/admin");
var vanthu = require("../middleware/vanthu");
var vanthulanhdao = require("../middleware/vanthulanhdao");

/**
 * GET /canbo
 * Lấy toàn bộ dữ liệu trong collection canbo 
 */
router.get('/', (req, res, next) => {
  canBoModel.find({})
    .populate('donvi')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});
/**
 * Lấy cán bộ lãnh đạo theo 1 nhân viên
 */
router.get('/lanhdao', vanthulanhdao, (req, res, next) => {
  var user = req.userDetail;
  canBoModel.find({ donvi: user.donvi, lalanhdao: true })
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
  var { donvi, ma, holot, ten, email, sdt, laadmin, lalanhdao, lavanthu, matkhau } = req.body;

  canBoModel.create({
    donvi, ma, holot, ten, email, sdt, laadmin, lalanhdao, lavanthu, matkhau
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
  var { _id, donvi, ma, holot, ten, email, sdt, laadmin, lalanhdao, lavanthu, actived, } = req.body;
  const user = req.user;
  canBoModel.findOne({ ma: user.ma })
    .then(data => {
      if (JSON.stringify(data._id) != JSON.stringify(_id))
        return canBoModel.findByIdAndUpdate(_id, {
          donvi, ma, holot, ten, email, sdt, laadmin, lalanhdao, lavanthu, actived,
        })
      else {
        return res.status(401).send("Bạn không thể tự thay đổi thông tin");
      }
    })
    .then(data => {
      return canBoModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send("Lỗi server");
    });
});

router.put('/:id/lock', (req, res, next) => {
  var id = req.params.id;
  const user = req.user;
  canBoModel.findOne({ ma: user.ma })
    .then(data => {
      if (JSON.stringify(data._id) != JSON.stringify(id)) {
        canBoModel.findById(id, (err, cb) => {
          cb.actived = !cb.actived;
          if (err) {
            res.status(500).send(err);
          }
          else
            cb.save((err, updateCB) => {
              if (err) {
                res.status(500).send(err);
              }
              else {
                res.send(updateCB);
              }
            });
        });
      }
      else {
        return res.status(401).send("Bạn không thể tự thay đổi thông tin");
      }
    })

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
