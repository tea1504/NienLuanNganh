var express = require('express');
var router = express.Router();
var congVanDenModel = require('../model/congvanden');
const vanthulanhdao = require("../middleware/vanthulanhdao");
const vanthu = require("../middleware/vanthu");
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

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

/**
 * GET /congvanden/full
 * Lấy toàn bộ dữ liệu với đầy đủ thông tin trong collection congvanden 
 */
router.get('/full', (req, res, next) => {
  congVanDenModel.find({})
    .populate('dv_phathanh')
    .populate('dv_nhan')
    .populate('loaicongvan')
    .populate('cb_nhap')
    .populate('cb_pheduyet')
    .populate('trangthai')
    .populate('domat')
    .populate('dokhan')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * GET /congvanden/:id
 * Lấy 1 document trong collection congvanden
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  congVanDenModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
router.get("/:id/file/:name", (req, res, next) => {
  var id = req.params.id;
  var name = req.params.name;
  // res.contentType('application/pdf');
  res.download(__dirname + '/../public/uploads/' + name, err => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  })
});

/**
 * GET /congvanden/full/:id
 * Lấy 1 document trong collection congvanden
 */
router.get("/full/:id", (req, res, next) => {
  var id = req.params.id;

  congVanDenModel.findById(id)
    .populate('dv_phathanh')
    .populate('dv_nhan')
    .populate('loaicongvan')
    .populate('cb_nhap')
    .populate('cb_pheduyet')
    .populate('trangthai')
    .populate('domat')
    .populate('dokhan')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * POST /congvanden
 * Thêm mới 1 document vào collection congvanden
 */
router.post('/', vanthu, upload.array('taptin'), (req, res, next) => {
  var { so, dv_phathanh, dv_nhan, loaicongvan, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden } = req.body;
  var taptin = req.files.map(el => el.originalname);

  var cb_nhap = req.userDetail._id;

  console.log(req.files);

  congVanDenModel.create({
    so, dv_phathanh, dv_nhan, loaicongvan, cb_nhap, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden, taptin
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/** 
 * PUT /congvanden
 * Thêm mới 1 document vào collection congvanden
 */
router.put('/xuly/:id', (req, res, next) => {
  var id = req.params.id;
  var canbo = req.body.canbo;
  var noidung = req.body.noidung;
  var thoigian = req.body.thoigian;

  if (!(canbo && noidung))
    res.status(500).send('Bạn phải nhập đủ thông tin');

  congVanDenModel.findByIdAndUpdate(id, {
    $push: {
      xuly: {
        canbo, noidung, thoigian
      }
    }
  })
    .then(data => {
      return congVanDenModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT /congvanden/:id
 * Cập nhật document trong collection congvanden theo id
 */
router.put('/:id', (req, res, next) => {
  var id = req.params.id; var so = req.body.so;
  var dv_phathanh = req.body.dv_phathanh;
  var dv_nhan = req.body.dv_nhan;
  var loaicongvan = req.body.loaicongvan;
  var cb_nhap = req.body.cb_nhap;
  var cb_pheduyet = req.body.cb_pheduyet;
  var trangthai = req.body.trangthai;
  var domat = req.body.domat;
  var dokhan = req.body.dokhan;
  var ngay = req.body.ngay;
  var hieuluc = req.body.hieuluc;
  var trichyeu = req.body.trichyeu;
  var nguoiky = req.body.nguoiky;
  var chucvu_nguoiky = req.body.chucvu_nguoiky;
  var soto = req.body.soto;
  var noiluu = req.body.noiluu;
  var ghichu = req.body.ghichu;
  var hangiaiquyet = req.body.hangiaiquyet;
  var ykien = req.body.ykien;
  var ngayden = req.body.ngayden;
  var taptin = req.body.taptin;

  congVanDenModel.findByIdAndUpdate(id, {
    so, dv_phathanh, dv_nhan, loaicongvan, cb_nhap, cb_pheduyet, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden, taptin,
  })
    .then(data => {
      return congVanDenModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE /congvanden/:id
 * Xóa 1 document trong collection congvanden
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  congVanDenModel.findByIdAndDelete(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
