require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var DoMatSchema = new Schema({
  ten: {
    type: String,
    required: [true, 'Bạn phải nhập tên độ mật'],
    unique: true,
  },
});

var DoMatModel = mongoose.model("DoMat", DoMatSchema);

module.exports = DoMatModel;
