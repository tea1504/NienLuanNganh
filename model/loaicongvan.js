require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var LoaiCongVanSchema = new Schema({
  ten: {
    type: String,
    required: [true, 'Bạn phải nhập tên loại công văn'],
  },
  viettat: {
    type: String,
    required: [true, 'Bạn phải nhập tên viết tắt của loại công văn'],
    unique: true,
  },
});

var LoaiCongVanModel = mongoose.model("LoaiCongVan", LoaiCongVanSchema);

module.exports = LoaiCongVanModel;
