require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var CVDiSchema = new Schema({
  so: {
    type: String,
    required: [true, 'bạn phải chọn số công văn'],
    unique: true,
  },
  dv_nhan: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'DonVi'
    }],
    validate: {
      validator: v => Array.isArray(v) && v.length > 0,
      message: 'Bạn phải chọn đơn vị nhận',
    },
  },
  loaicongvan: {
    type: Schema.Types.ObjectId,
    ref: 'LoaiCongVan',
    required: [true, 'Bạn phải chọn loại công văn'],
  },
  cb_nhap: {
    type: Schema.Types.ObjectId,
    ref: 'CanBo',
    required: [true, 'Bạn phải chọn cán bộ nhập'],
  },
  domat: {
    type: Schema.Types.ObjectId,
    ref: 'DoMat',
  },
  dokhan: {
    type: Schema.Types.ObjectId,
    ref: 'DoKhan',
  },
  ngay: {
    type: Date,
    required: [true, 'Bạn phải nhập ngày'],
  },
  hieuluc: {
    type: Date,
  },
  trichyeu: {
    type: String,
    required: [true, 'Bạn phải nhập trích yếu'],
  },
  nguoiky: {
    type: String,
    required: [true, 'Bạn phải nhập tên người ký'],
  },
  chucvu_nguoiky: {
    type: String,
    required: [true, 'Bạn phải nhập chức vụ người ký'],
  },
  soto: {
    type: Number,
    required: [true, 'Bạn phải nhập số tờ'],
  },
  noiluu: {
    type: String,
    required: [true, 'Bạn phải nhập nơi lưu'],
  },
  ghichu: {
    type: String,
  },
  hantraloi: {
    type: Date,
  },
  ngaydi: {
    type: Date,
    required: [true, 'Bạn phải nhập ngày di'],
  },
  taptin: {
    type: [{
      path: String,
      name: String,
    }],
    validate: {
      validator: v => Array.isArray(v) && v.length > 0,
      message: 'Bạn phải chọn tập tin công văn',
    },
  },
  xuly: {
    type: [{
      canbo: {
        type: Schema.Types.ObjectId,
        ref: 'CanBo',
        required: [true, 'Bạn phải chọn cán bộ xử lý'],
      },
      thoigian: {
        type: Date,
        default: Date.now,
      },
      noidung: {
        type: String,
        required: [true, 'Bạn phải nhập nội dung'],
      },
    }],
  },
});

var CVDiModel = mongoose.model("CVDi", CVDiSchema);

module.exports = CVDiModel;
