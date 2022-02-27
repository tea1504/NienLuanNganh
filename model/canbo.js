require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var CanBoSchema = new Schema({
  donvi: {
    type: Schema.Types.ObjectId,
    ref: 'DonVi',
    required: [true, 'Bạn phải nhập đơn vị'],
  },
  ma: {
    type: String,
    required: [true, 'Bạn phải nhập mã cán bộ'],
    unique: true,
  },
  holot: {
    type: String,
    required: [true, 'Bạn phải nhập họ và tên đệm'],
  },
  ten: {
    type: String,
    required: [true, 'Bạn phải nhập tên'],
  },
  email: {
    type: String,
    required: [true, 'Bạn phải nhập địa chỉ email'],
    validate: {
      validator: function(v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      },
      message: props => `${props.value} không phải là 1 địa chỉ email hợp lệ!`
    },
    unique: true,
  },
  sdt: {
    type: String,
    required: [true, 'Bạn phải nhập số điện thoại'],
    validate: {
      validator: function(v) {
        return /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/.test(v);
      },
      message: props => `${props.value} không phải là 1 số điện thoại hợp lệ!`
    },
    unique: true,
  },
  laadmin: {
    type: Boolean,
    default: false,
  },
  lalanhdao: {
    type: Boolean,
    default: false,
  },
  lavanthu: {
    type: Boolean,
    default: false,
  },
  actived: {
    type: Boolean,
    default: true,
  },
});

var CanBoModel = mongoose.model("CanBo", CanBoSchema);

module.exports = CanBoModel;
