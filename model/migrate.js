const mongoose = require('mongoose')
const doKhan = require('./dokhan')

async function start() {
  await doKhan.deleteMany();
  await doKhan.create([
    {
      ten: 'Hỏa tốc'
    },
    {
      ten: 'Thượng khẩn'
    },
    {
      ten: 'Khẩn'
    },
  ])
}

start();
