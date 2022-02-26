//const mongoose = require('mongoose');
const doKhan = require('./dokhan');
const doMat = require('./domat');

async function start() {
  await doKhan.deleteMany();
  var dk = await doKhan.create([
    {
      ten: 'Hỏa tốc'
    },
    {
      ten: 'Thượng khẩn'
    },
    {
      ten: 'Khẩn'
    },
  ]);

  await doMat.deleteMany();
  var dm = await doMat.create([
    {
      ten: 'tuyệt mật',
    },
    {
      ten: 'tối mật',
    },
    {
      ten: 'mật',
    },
  ]);
}

start();
