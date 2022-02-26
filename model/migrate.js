//const mongoose = require('mongoose');
const doKhan = require('./dokhan');
const doMat = require('./domat');
const trangthai = require('./trangthai');
const lcv = require('./loaicongvan');
const dv = require('./donvi');

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
  
  await trangthai.deleteMany();
  var tt = await trangthai.create([
    {
      ten: 'chờ duyệt',
    },
    {
      ten: 'chờ xử lý',
    },
    {
      ten: 'đã xử lý',
    },
  ]);

  await lcv.deleteMany();
  var loaicv = await lcv.create([
    {
      ten: 'nghị quyết',
      viettat: 'NQ',
    },
    {
      ten: 'quyết định',
      viettat: 'QĐ',
    },
    {
      ten: 'nghị quyết',
      viettat: 'NQ',
    },
    {
      ten: 'chỉ thị',
      viettat: 'CT',
    },
    {
      ten: 'quy chế',
      viettat: 'QC',
    },
    {
      ten: 'quy định',
      viettat: 'QyĐ',
    },
    {
      ten: 'thông cáo',
      viettat: 'TC',
    },
    {
      ten: 'thông báo',
      viettat: 'TB',
    },
    {
      ten: 'hướng dẫn',
      viettat: 'HD',
    },
    {
      ten: 'chương trình',
      viettat: 'CTr',
    },
    {
      ten: 'kế hoạch',
      viettat: 'KH',
    },
    {
      ten: 'phương án',
      viettat: 'PA',
    },
    {
      ten: 'dự án',
      viettat: 'DA',
    },
    {
      ten: 'đề án',
      viettat: 'ĐA',
    },
    {
      ten: 'báo cáo',
      viettat: 'BC',
    },
    {
      ten: 'biên bản',
      viettat: 'BB',
    },
    {
      ten: 'tờ trình',
      viettat: 'TTr',
    },
    {
      ten: 'hợp đồng',
      viettat: 'HĐ',
    },
    {
      ten: 'công điện',
      viettat: 'CĐ',
    },
    {
      ten: 'bản ghi nhớ',
      viettat: 'BGN',
    },
    {
      ten: 'bản thỏa thuận',
      viettat: 'BTT',
    },
    {
      ten: 'giấy ủy quyền',
      viettat: 'GUQ',
    },
    {
      ten: 'giấy mời',
      viettat: 'GM',
    },
    {
      ten: 'giấy giới thiệu',
      viettat: 'GGT',
    },
    {
      ten: 'giấy nghỉ phép',
      viettat: 'GNP',
    },
    {
      ten: 'phiếu gửi',
      viettat: 'PG',
    },
    {
      ten: 'phiếu chuyển',
      viettat: 'PC',
    },
    {
      ten: 'phiếu báo',
      viettat: 'PB',
    },
    {
      ten: 'bản sao y',
      viettat: 'SY',
    },
    {
      ten: 'bản trích sao',
      viettat: 'TrS',
    },
    {
      ten: 'bản sao lục',
      viettat: 'SL',
    },
  ]);

  await dv.deleteMany();
  var donvi = await dv.create([
    {
      ten: 'Khoa công nghệ thông tin và truyền thông',
      benngoai: false,
      email: 'cit@ctu.edu.vn',
    },
    {
      ten: 'Khoa công nghệ',
      email: 'cn@ctu.edu.vn',
    },
  ]);
}

start();
