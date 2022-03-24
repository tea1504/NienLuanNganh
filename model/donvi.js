require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var DonViSchema = new Schema({
  ten: {
    type: String,
    required: [true, 'Bạn phải nhập tên cho đơn vị'],
  },
  benngoai: {
    type: Boolean,
    default: false,
  },
  listbenngoai: {
    list: [ {
      type: Schema.Types.ObjectId,
      ref: 'DonVi',
    }],
  },
  email: {
    type: String,
    required: [true, 'Bạn phải nhập địa chỉ email cho đơn vị'],
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      },
      message: props => `${props.value} không phải là 1 địa chỉ email hợp lệ!`
    },
    unique: true,
  }
});

var DonViModel = mongoose.model("DonVi", DonViSchema);

module.exports = DonViModel;
