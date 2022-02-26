require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var TrangThaiSchema = new Schema({
  ten: {
    type: String,
    required: [true, 'Bạn phải nhập tên trạng thái'],
  },
});

var TrangThaiModel = mongoose.model("TrangThai", TrangThaiSchema);

module.exports = TrangThaiModel;
