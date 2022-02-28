require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var CVDenSchema = new Schema({
  so: {
    type: String,
    required: [true, 'bạn phải chọn số công văn'],
    unique: true,
  },
  dv_phathanh: {
    type: Schema.Types.ObjectId,
    ref: 'DonVi',
    required: [true, 'Bạn phải chọn đơn vị phát hành'],
  },
  dv_nhan: {
    type: Schema.Types.ObjectId,
    ref: 'DonVi',
    required: [true, 'Bạn phải chọn đơn vị nhận'],
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
  cb_pheduyet: {
    type: Schema.Types.ObjectId,
    ref: 'CanBo',
  },
  trangthai: {
    type: Schema.Types.ObjectId,
    ref: 'TrangThai',
    required: [true, 'Bạn phải chọn trạng thái'],
  },
  domat: {
    type: Schema.Types.ObjectId,
    ref: 'DoMat',
    required: [true, 'Bạn phải chọn độ mật'],
  },
  dokhan: {
    type: Schema.Types.ObjectId,
    ref: 'DoKhan',
    required: [true, 'Bạn phải chọn độ khẩn'],
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
    required: [true, 'Bạn phải nhập ghi chú'],
  },
  hangiaiquyet: {
    type: Date,
    required: [true, 'Bạn phải nhập ngày hết hạn giải quyết'],
  },
  ykien: {
    type: String,
    required: [true, 'Bạn phải nhập ý kiến'],
  },
  ngayden: {
    type: Date,
    required: [true, 'Bạn phải nhập ngày đến'],
  },
  taptin: {
    type: [String],
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

var CVDenModel = mongoose.model("CVDen", CVDenSchema);

module.exports = CVDenModel;
