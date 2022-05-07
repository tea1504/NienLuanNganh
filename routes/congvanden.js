var express = require('express');
var router = express.Router();
var congVanDenModel = require('../model/congvanden');
var canBoModel = require('../model/canbo');
const vanthulanhdao = require("../middleware/vanthulanhdao");
const vanthu = require("../middleware/vanthu");
var multer = require('multer');
var fs = require('fs');
const { promisify } = require('util');
const { deepStrictEqual } = require('assert');
const unlinkAsync = promisify(fs.unlink)

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync('public/uploads/' + req.body.domat)) {
      fs.mkdirSync('public/uploads/' + req.body.domat);
    }
    cb(null, 'public/uploads/' + req.body.domat);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '.pdf')
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
  var user = req.userDetail;
  canBoModel.find({ donvi: user.donvi }, '_id')
    .then(data => {
      return congVanDenModel.find({ cb_nhap: { $in: data }, })
        .populate('dv_phathanh')
        // .populate('dv_nhan')
        .populate('loaicongvan')
        .populate('cb_nhap')
        .populate('cb_pheduyet')
        .populate('trangthai')
        .populate('domat')
        .populate('dokhan')
    })
    .then(data => {
      if ((!user.lalanhdao) && (!user.lavanthu))
        res.send(data.filter(el => el.domat == null));
      else
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
/**
 * Download file pdf
 */
router.get("/:id/file/:name", (req, res, next) => {
  var id = req.params.id;
  var name = req.params.name;
  congVanDenModel.findById(id)
    .then(data => {
      const file = `${__dirname}/../public/uploads/${data.domat ?? ""}/${name}`;
      var fileName = data.taptin.filter(el => el.path === name)[0].name;
      console.log(data);
      res.download(file, fileName);
    }).catch(err => {
      res.status(500).send("Lỗi server không tải được file");
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
    // .populate('dv_nhan')
    .populate('loaicongvan')
    .populate('cb_nhap')
    .populate('cb_pheduyet')
    .populate('trangthai')
    .populate('domat')
    .populate('dokhan')
    .populate('xuly.canbo')
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
  var { so, dv_phathanh, loaicongvan, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden, cb_pheduyet } = req.body;
  var taptin = req.files.map(el => { return { name: el.originalname, path: el.filename } });
  var user = req.userDetail;

  var xuly = [{
    canbo: user._id,
    noidung: `tạo công văn đến`,
    thoigian: Date.now(),
  }];

  congVanDenModel.create({
    so, dv_phathanh, loaicongvan, cb_nhap: user._id, trangthai, domat: domat ? domat : null, dokhan: dokhan ? dokhan : null, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden, taptin, xuly, cb_pheduyet: cb_pheduyet ? cb_pheduyet : null,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      //Xóa tập tin khi không thể lưu thông tin vào csdl
      req.files.map(el => { unlinkAsync(el.path) });
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
router.put('/:id', vanthulanhdao, upload.array('taptin'), (req, res, next) => {
  var id = req.params.id;
  var { so, dv_phathanh, loaicongvan, cb_pheduyet, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden } = req.body;
  var taptin = req.files.map(el => { return { name: el.originalname, path: el.filename } });
  var user = req.userDetail;

  var xl = {
    canbo: user._id,
    noidung: `chỉnh sửa công văn`,
    thoigian: Date.now(),
  };

  var tapTinTemp = [], dm;

  var obj = {
    so, dv_phathanh, domat: null, dokhan: null, loaicongvan, trangthai, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hangiaiquyet, ykien, ngayden, $push: { xuly: xl },
  };

  if (taptin.length != 0)
    obj = { ...obj, taptin };
  if (domat != 'undefined')
    obj = { ...obj, domat: domat };
  if (dokhan != 'undefined')
    obj = { ...obj, dokhan: dokhan };

  congVanDenModel.findByIdAndUpdate({ _id: id }, obj, { runValidators: true })
    .then(data => {
      if (taptin.length != 0) {
        data.taptin.map(el => {
          const file = `${__dirname}/../public/uploads/${data.domat ?? ""}/${el.path}`;
          fs.unlinkSync(file);
        });
      }
      else {
        dm = data.domat;
        tapTinTemp = data.taptin.map(el => `${__dirname}/../public/uploads/${data.domat ?? ""}/${el.path}`);
        console.log("domat", dm);
        console.log("tapTinTemp", tapTinTemp);
      }
      return congVanDenModel.findById(data._id);
    })
    .then(data => {
      console.log(JSON.stringify(dm), JSON.stringify(data.domat), JSON.stringify(dm) != JSON.stringify(data.domat));
      if (tapTinTemp.length != 0 && JSON.stringify(dm) != JSON.stringify(data.domat)) {
        console.log(data.taptin);
        data.taptin.map((el, ind) => {
          console.log("copy", tapTinTemp[ind], `${__dirname}/../public/uploads/${data.domat ?? ""}/${el.path}`);
          if (!fs.existsSync('public/uploads/' + data.domat)) {
            fs.mkdirSync('public/uploads/' + data.domat);
          }
          fs.copyFileSync(tapTinTemp[ind], `${__dirname}/../public/uploads/${data.domat?? ""}/${el.path}`);
          fs.unlinkSync(tapTinTemp[ind]);
        })
      }
      return res.send(data);
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
  console.log(id);
  congVanDenModel.findByIdAndDelete(id)
    .then(data => {
      data.taptin.map(el => {
        const file = `${__dirname}/../public/uploads/${data.domat ?? ""}/${el.path}`;
        fs.unlinkSync(file);
      })
      res.send(data);
    })
    .catch(err => {
      res.status(500).send("Lỗi server");
    });
});

module.exports = router;
