require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var DoKhanSchema = new Schema({
  ten: {
    type: String,
    required: [true, 'Bạn phải nhập tên']
  }
});

var DoKhanModel = mongoose.model('DoKhan', DoKhanSchema);

module.exports = DoKhanModel;