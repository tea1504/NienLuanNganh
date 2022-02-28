var express = require('express');
var router = express.Router();
var congVanDiModel = require('../model/congvandi');

/**
 * GET /congvandi
 * Lấy toàn bộ dữ liệu trong collection congvandi 
 */
router.get('/', (req, res, next) => {
  congVanDiModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * GET /congvandi/full
 * Lấy toàn bộ dữ liệu với đầy đủ thông tin trong collection congvandi 
 */
router.get('/full', (req, res, next) => {
  congVanDiModel.find({})
    .populate('dv_phathanh')
    .populate('dv_nhan')
    .populate('loaicongvan')
    .populate('cb_nhap')
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
 * GET /congvandi/:id
 * Lấy 1 document trong collection congvandi
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  congVanDiModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * GET /congvandi/full/:id
 * Lấy 1 document trong collection congvandi
 */
router.get("/full/:id", (req, res, next) => {
  var id = req.params.id;

  congVanDiModel.findById(id)
    .populate('dv_phathanh')
    .populate('dv_nhan')
    .populate('loaicongvan')
    .populate('cb_nhap')
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
 * POST /congvandi
 * Thêm mới 1 document vào collection congvandi
 */
router.post('/', (req, res, next) => {
  var so = req.body.so;
  var dv_phathanh = req.body.dv_phathanh;
  var dv_nhan = req.body.dv_nhan;
  var loaicongvan = req.body.loaicongvan;
  var cb_nhap = req.body.cb_nhap;
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
  var hantraloi = req.body.hantraloi;
  var ngaydi = req.body.ngaydi;
  var taptin = req.body.taptin;

  congVanDiModel.create({
    so, dv_phathanh, dv_nhan, loaicongvan, cb_nhap, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hantraloi, ngaydi, taptin,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT /congvandi/:id
 * Cập nhật document trong collection congvandi theo id
 */
router.put('/:id', (req, res, next) => {
  var id = req.params.id;var so = req.body.so;
  var so = req.body.so;
  var dv_phathanh = req.body.dv_phathanh;
  var dv_nhan = req.body.dv_nhan;
  var loaicongvan = req.body.loaicongvan;
  var cb_nhap = req.body.cb_nhap;
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
  var hantraloi = req.body.hantraloi;
  var ngaydi = req.body.ngaydi;
  var taptin = req.body.taptin;

  congVanDiModel.findByIdAndUpdate(id, {
    so, dv_phathanh, dv_nhan, loaicongvan, cb_nhap, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hantraloi, ngaydi, taptin,
  })
    .then(data => {
      return congVanDiModel.findById(data.id);
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * DELETE /congvandi/:id
 * Xóa 1 document trong collection congvandi
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  congVanDiModel.findByIdAndDelete(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
