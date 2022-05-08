require("dotenv").config();
var express = require('express');
var router = express.Router();
var congVanDiModel = require('../model/congvandi');
const vanthulanhdao = require("../middleware/vanthulanhdao");
const vanthu = require("../middleware/vanthu");
var multer = require('multer');
var fs = require('fs');
const { promisify } = require('util');
const { deepStrictEqual } = require('assert');
const CanBoModel = require('../model/canbo');
const DonViModel = require('../model/donvi')
const unlinkAsync = promisify(fs.unlink);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.body.domat == 'undefined') req.body.domat = '';
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
  var user = req.userDetail;
  CanBoModel.find({ donvi: user.donvi }, '_id')
    .then(data => {
      return congVanDiModel.find({ cb_nhap: { $in: data }, })
        .populate('dv_nhan')
        .populate('loaicongvan')
        .populate('cb_nhap')
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
 * Download file pdf
 */
router.get("/:id/file/:name", (req, res, next) => {
  var id = req.params.id;
  var name = req.params.name;
  congVanDiModel.findById(id)
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
 * GET /congvandi/full/:id
 * Lấy 1 document trong collection congvandi
 */
router.get("/full/:id", (req, res, next) => {
  var id = req.params.id;

  congVanDiModel.findById(id)
    .populate('dv_nhan')
    .populate('loaicongvan')
    .populate('cb_nhap')
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
 * POST /congvandi
 * Thêm mới 1 document vào collection congvandi
 */
router.post('/', vanthu, upload.array('taptin'), (req, res, next) => {
  var { so, dv_nhan, loaicongvan, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hantraloi, ngaydi, email_nd, email_title, email_send } = req.body;
  var taptin = req.files.map(el => { return { name: el.originalname, path: el.filename } });

  var user = req.userDetail;

  var xuly = [{
    canbo: user._id,
    noidung: `tạo công văn đi số ${so}`,
    thoigian: Date.now(),
  }];

  var obj = {
    so, dv_nhan, loaicongvan, cb_nhap: user._id, domat: null, dokhan: null, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hantraloi, ngaydi, taptin, xuly
  };

  if (domat != 'undefined' && domat != '')
    obj = { ...obj, domat: domat };
  if (dokhan != 'undefined' && dokhan != '')
    obj = { ...obj, dokhan: dokhan };

  var CreatedData;
  congVanDiModel.create(obj)
    .then(data => {
      CreatedData = data;
      return DonViModel.find({ _id: { $in: data.dv_nhan } })
    })
    .then(data => {
      var toEmail = data.map(el => el.email);
      var file = taptin.map(el => {
        return {
          filename: el.name,
          path: `${__dirname}/../public/uploads/${CreatedData.domat ?? ""}/${el.path}`
        }
      })
      console.log(email_send);

      var mailOptions = {
        from: process.env.MAIL_USER,
        to: toEmail.join(', '),
        subject: email_title,
        html: email_nd,
        attachments: file,
      };
      if (email_send === 'true') {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }
      res.send(CreatedData);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/**
 * PUT /congvandi/:id
 * Cập nhật document trong collection congvandi theo id
 */
router.put('/:id', vanthulanhdao, upload.array('taptin'), (req, res, next) => {
  var id = req.params.id;
  var { so, dv_nhan, loaicongvan, trangthai, domat, dokhan, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hantraloi, ngaydi } = req.body;
  var taptin = req.files.map(el => { return { name: el.originalname, path: el.filename } });
  var user = req.userDetail;

  var xl = {
    canbo: user._id,
    noidung: `chỉnh sửa công văn`,
    thoigian: Date.now(),
  };

  var tapTinTemp = [], dm;

  var obj = {
    so, dv_nhan, domat: null, dokhan: null, loaicongvan, trangthai, ngay, hieuluc, trichyeu, nguoiky, chucvu_nguoiky, soto, noiluu, ghichu, hantraloi, ngaydi, $push: { xuly: xl },
  };

  if (taptin.length != 0)
    obj = { ...obj, taptin };
  if (domat != 'undefined' && domat != '')
    obj = { ...obj, domat: domat };
  if (dokhan != 'undefined' && dokhan != '')
    obj = { ...obj, dokhan: dokhan };

  console.log("data", obj);

  congVanDiModel.findByIdAndUpdate({ _id: id }, obj, { runValidators: true })
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
      }
      return congVanDiModel.findById(data._id);
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
          fs.copyFileSync(tapTinTemp[ind], `${__dirname}/../public/uploads/${data.domat ?? ""}/${el.path}`);
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
 * DELETE /congvandi/:id
 * Xóa 1 document trong collection congvandi
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  congVanDiModel.findByIdAndDelete(id)
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
