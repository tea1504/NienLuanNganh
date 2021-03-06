var passwordHash = require('password-hash');
const doKhan = require('./dokhan');
const doMat = require('./domat');
const trangthai = require('./trangthai');
const lcv = require('./loaicongvan');
const dv = require('./donvi');
const cb = require('./canbo');
const cvden = require('./congvanden');
const cvdi = require('./congvandi');

/**
 * Hàm tạo dữ liệu mẫu cho dự án
 */
async function start() {
  await doKhan.deleteMany();
  var dk = await doKhan.create([
    {
      _id: 'dokhan000001',
      ten: 'Hỏa tốc'
    },
    {
      _id: 'dokhan000002',
      ten: 'Thượng khẩn'
    },
    {
      _id: 'dokhan000003',
      ten: 'Khẩn'
    },
  ]);

  console.log(`Tạo ${dk.length} độ khẩn:`);
  dk.map(el => console.log(`- ${el._id}`));

  await doMat.deleteMany();
  var dm = await doMat.create([
    {
      _id: 'domat0000001',
      ten: 'tuyệt mật',
    },
    {
      _id: 'domat0000002',
      ten: 'tối mật',
    },
    {
      _id: 'domat0000003',
      ten: 'mật',
    },
  ]);

  console.log(`Tạo ${dm.length} độ mật:`);
  dm.map(el => console.log(`- ${el._id}`));

  await trangthai.deleteMany();
  var tt = await trangthai.create([
    {
      _id: 'trangthai001',
      ten: 'chờ duyệt',
    },
    {
      _id: 'trangthai002',
      ten: 'chờ xử lý',
    },
    {
      _id: 'trangthai003',
      ten: 'đã xử lý',
    },
    {
      _id: 'trangthai004',
      ten: 'từ chối',
    },
  ]);

  console.log(`Tạo ${tt.length} trạng thái:`);
  tt.map(el => console.log(`- ${el._id}`));

  await lcv.deleteMany();
  var loaicv = await lcv.create([
    {
      _id: 'loaiCV000001',
      ten: 'nghị quyết',
      viettat: 'NQ',
    },
    {
      _id: 'loaiCV000002',
      ten: 'quyết định',
      viettat: 'QĐ',
    },
    {
      _id: 'loaiCV000003',
      ten: 'chỉ thị',
      viettat: 'CT',
    },
    {
      _id: 'loaiCV000004',
      ten: 'quy chế',
      viettat: 'QC',
    },
    {
      _id: 'loaiCV000005',
      ten: 'quy định',
      viettat: 'QyĐ',
    },
    {
      _id: 'loaiCV000006',
      ten: 'thông cáo',
      viettat: 'TC',
    },
    {
      _id: 'loaiCV000007',
      ten: 'thông báo',
      viettat: 'TB',
    },
    {
      _id: 'loaiCV000008',
      ten: 'hướng dẫn',
      viettat: 'HD',
    },
    {
      _id: 'loaiCV000009',
      ten: 'chương trình',
      viettat: 'CTr',
    },
    {
      _id: 'loaiCV000010',
      ten: 'kế hoạch',
      viettat: 'KH',
    },
    {
      _id: 'loaiCV000011',
      ten: 'phương án',
      viettat: 'PA',
    },
    {
      _id: 'loaiCV000012',
      ten: 'dự án',
      viettat: 'DA',
    },
    {
      _id: 'loaiCV000013',
      ten: 'đề án',
      viettat: 'ĐA',
    },
    {
      _id: 'loaiCV000014',
      ten: 'báo cáo',
      viettat: 'BC',
    },
    {
      _id: 'loaiCV000015',
      ten: 'biên bản',
      viettat: 'BB',
    },
    {
      _id: 'loaiCV000016',
      ten: 'tờ trình',
      viettat: 'TTr',
    },
    {
      _id: 'loaiCV000017',
      ten: 'hợp đồng',
      viettat: 'HĐ',
    },
    {
      _id: 'loaiCV000018',
      ten: 'công điện',
      viettat: 'CĐ',
    },
    {
      _id: 'loaiCV000019',
      ten: 'bản ghi nhớ',
      viettat: 'BGN',
    },
    {
      _id: 'loaiCV000020',
      ten: 'bản thỏa thuận',
      viettat: 'BTT',
    },
    {
      _id: 'loaiCV000021',
      ten: 'giấy ủy quyền',
      viettat: 'GUQ',
    },
    {
      _id: 'loaiCV000022',
      ten: 'giấy mời',
      viettat: 'GM',
    },
    {
      _id: 'loaiCV000023',
      ten: 'giấy giới thiệu',
      viettat: 'GGT',
    },
    {
      _id: 'loaiCV000024',
      ten: 'giấy nghỉ phép',
      viettat: 'GNP',
    },
    {
      _id: 'loaiCV000025',
      ten: 'phiếu gửi',
      viettat: 'PG',
    },
    {
      _id: 'loaiCV000026',
      ten: 'phiếu chuyển',
      viettat: 'PC',
    },
    {
      _id: 'loaiCV000027',
      ten: 'phiếu báo',
      viettat: 'PB',
    },
    {
      _id: 'loaiCV000028',
      ten: 'bản sao y',
      viettat: 'SY',
    },
    {
      _id: 'loaiCV000029',
      ten: 'bản trích sao',
      viettat: 'TrS',
    },
    {
      _id: 'loaiCV000030',
      ten: 'bản sao lục',
      viettat: 'SL',
    },
  ]);

  console.log(`Tạo ${loaicv.length} loại công văn:`);
  loaicv.map(el => console.log(`- ${el._id}`));

  await dv.deleteMany();
  var donvibn = await dv.create([
    {
      _id: 'donvingoai01',
      ten: 'đơn vị 1',
      email: 'dv1@ctu.edu.vn',
      benngoai: true,
    },
    {
      _id: 'donvingoai02',
      ten: 'dv2',
      email: 'dv2@ctu.edu.vn',
      benngoai: true,
    },
    {
      _id: 'donvingoai03',
      ten: 'đơn vị 3',
      email: 'dv3@ctu.edu.vn',
      benngoai: true,
    },
    {
      _id: 'donvingoai04',
      ten: 'dv 4',
      email: 'dv4@ctu.edu.vn',
      benngoai: true,
    },
    {
      _id: 'donvingoai05',
      ten: 'đơn vị 5',
      email: 'dv5@ctu.edu.vn',
      benngoai: true,
    },
    {
      _id: 'donvingoai06',
      ten: 'dv6',
      email: 'dv6@ctu.edu.vn',
      benngoai: true,
    },
  ]);

  console.log(`Tạo ${donvibn.length} đơn vị bên ngoài:`);
  donvibn.map(el => console.log(`- ${el._id}`));

  var donvi = await dv.create([
    {
      _id: 'donvi0000001',
      ten: 'Khoa công nghệ thông tin và truyền thông',
      email: 'cit@ctu.edu.vn',
      listbenngoai: [
        'donvingoai01',
        'donvingoai02',
        'donvingoai03',
        'donvingoai04',
      ]
    },
    {
      _id: 'donvi0000002',
      ten: 'Khoa công nghệ',
      email: 'cn@ctu.edu.vn',
      listbenngoai: [
        'donvingoai05',
        'donvingoai06',
      ]
    },
    {
      _id: 'donvi0000003',
      ten: 'Khoa kinh tế',
      email: 'kt@ctu.edu.vn',
    },
  ]);

  console.log(`Tạo ${donvi.length} đơn vị:`);
  donvi.map(el => console.log(`- ${el._id}`));

  var mcb = 1;
  var listCB = [];
  // canbo_000001
  listCB.push(generateCB(mcb, 'donvi0000001', 1));
  mcb++;

  //đơn vị thứ 1 có cán bộ từ (1 - 1) * 8 + 1 + 1 -> 1 * 8 + 1 | 2 -> 9
  //đơn vị thứ 2 có cán bộ từ (2 - 1) * 8 + 1 + 1 -> 2 * 8 + 1 | 10 -> 17
  //đơn vị thứ 3 có cán bộ từ (3 - 1) * 8 + 1 + 1 -> 3 * 8 + 1 | 18 -> 25
  //đơn vị thứ x có cán bộ từ (x - 1) * 8 + 1 + 1 -> x * 8 + 1 | 8 * x - 6 -> 8 * x + 1
  donvi.map((el, ind) => {
    listCB.push(generateCB(mcb, el.id, 2));
    mcb++;
    listCB.push(generateCB(mcb, el.id, 3));
    mcb++;
    for (var i = 1; i <= 5; i++) {
      listCB.push(generateCB(mcb, el.id, 4));
      mcb++;
    }
    listCB.push(generateCB(mcb, el.id, 0));
    mcb++;
  });

  await cb.deleteMany();
  var canbo = await cb.create(listCB);

  console.log(`Tạo ${canbo.length} cán bộ:`);
  canbo.map(el => console.log(`- ${el._id}`));

  await cvden.deleteMany();
  var congvanden = await cvden.create([
    {
      _id: 'cvden0000001',
      so: '737/ĐHQGHN-CT&CTHSSV',
      dv_phathanh: 'donvingoai01',
      loaicongvan: 'loaiCV000007',
      cb_nhap: 'canbo_000003',
      cb_pheduyet: 'canbo_000002',
      cb_xuly: 'canbo_000004',
      trangthai: 'trangthai003',
      domat: null,
      dokhan: null,
      ngay: '09-03-2022',
      hieuluc: null,
      trichyeu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum iaculis pellentesque. Nullam pellentesque, mi ac eleifend semper, velit arcu varius eros, et rhoncus nulla massa et neque. Maecenas ac viverra mauris. Proin tristique, diam ac vulputate pellentesque, lectus dolor pharetra arcu, eget feugiat urna dolor in metus. Suspendisse sit amet vulputate augue. Nulla facilisi. Nulla enim neque, convallis nec erat vitae, tempus laoreet lectus. Vestibulum tempor ultrices arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer a facilisis lorem. Praesent interdum arcu id arcu dapibus facilisis quis id nisi. Aliquam vitae orci ut nibh porta faucibus. Aliquam convallis leo nec dui hendrerit, sit amet feugiat urna porta.',
      nguoiky: 'Nguyễn Hoàng Hải',
      chucvu_nguoiky: 'Phó giám đốc',
      soto: '3',
      noiluu: 'Văn phòng khoa CNTT',
      ghichu: '',
      ykien: '',
      ngayden: '05/15/2022',
      taptin: [{
        path: '1.pdf',
        name: '1.pdf',
      },],
      xuly: [
        {
          canbo: 'canbo_000003',
          thoigian: '05/15/2022 10:05:55',
          noidung: 'Tạo mới công văn',
        },
        {
          canbo: 'canbo_000002',
          thoigian: '05/15/2022 12:05:55',
          noidung: 'Duyệt công văn',
        },
        {
          canbo: 'canbo_000004',
          thoigian: '05/15/2022 15:05:55',
          noidung: 'Xử lý công văn',
        },
      ],
    },
    {
      _id: 'cvden0000002',
      so: '423/KH-ĐHCT-CTCT',
      dv_phathanh: 'donvi0000001',
      loaicongvan: 'loaiCV000010',
      cb_nhap: 'canbo_000011',
      cb_pheduyet: 'canbo_000010',
      cb_xuly: null,
      trangthai: 'trangthai001',
      domat: null,
      dokhan: null,
      ngay: '02/28/2022',
      hieuluc: null,
      trichyeu: 'Integer elit lorem, faucibus a magna at, ultrices congue mi. Proin vitae mi imperdiet augue lobortis euismod. Suspendisse eu ligula turpis. Nunc ipsum urna, aliquam non magna quis, viverra vulputate enim. Maecenas neque ante, elementum nec blandit in, ullamcorper id odio. Etiam viverra accumsan placerat. Fusce eget malesuada dui.',
      nguoiky: 'Trần Trung Tính',
      chucvu_nguoiky: 'Phó hiệu trưởng',
      soto: '6',
      noiluu: 'Văn phòng khoa',
      ghichu: null,
      ykien: null,
      ngayden: '03/01/2022',
      taptin: [{
        path: '2.pdf',
        name: '2.pdf',
      },],
      xuly: [
        {
          canbo: 'canbo_000011',
          thoigian: '03/01/2022 08:30:21',
          noidung: 'Nhập công văn đến',
        },
      ],
    },
    {
      _id: 'cvden0000003',
      so: '225',
      dv_phathanh: 'donvingoai03',
      loaicongvan: 'loaiCV000007',
      cb_nhap: 'canbo_000003',
      cb_pheduyet: 'canbo_000002',
      cb_xuly: 'canbo_000005',
      trangthai: 'trangthai003',
      domat: null,
      dokhan: null,
      ngay: '09-03-2022',
      hieuluc: null,
      trichyeu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum iaculis pellentesque. Nullam pellentesque, mi ac eleifend semper, velit arcu varius eros, et rhoncus nulla massa et neque. Maecenas ac viverra mauris. Proin tristique, diam ac vulputate pellentesque, lectus dolor pharetra arcu, eget feugiat urna dolor in metus. Suspendisse sit amet vulputate augue. Nulla facilisi. Nulla enim neque, convallis nec erat vitae, tempus laoreet lectus. Vestibulum tempor ultrices arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer a facilisis lorem. Praesent interdum arcu id arcu dapibus facilisis quis id nisi. Aliquam vitae orci ut nibh porta faucibus. Aliquam convallis leo nec dui hendrerit, sit amet feugiat urna porta.',
      nguoiky: 'Nguyễn Hoàng Hải',
      chucvu_nguoiky: 'Phó giám đốc',
      soto: '3',
      noiluu: 'Văn phòng khoa CNTT',
      ghichu: '',
      ykien: '',
      ngayden: '05/15/2022',
      taptin: [{
        path: '3.pdf',
        name: '3.pdf',
      },],
      xuly: [
        {
          canbo: 'canbo_000003',
          thoigian: '05/15/2022 10:05:55',
          noidung: 'Tạo mới công văn',
        },
        {
          canbo: 'canbo_000002',
          thoigian: '05/15/2022 12:05:55',
          noidung: 'Duyệt công văn',
        },
        {
          canbo: 'canbo_000005',
          thoigian: '05/15/2022 15:05:55',
          noidung: 'Xử lý công văn',
        },
      ],
    },
  ]);

  console.log(`Tạo ${congvanden.length} công văn đến:`);
  congvanden.map(el => console.log(`- ${el._id}`));

  await cvdi.deleteMany();
  var congvandi = await cvdi.create([
    {
      _id: 'cvdi_0000001',
      so: '979/QĐ-ĐHCT',
      dv_nhan: [
        'donvingoai01',
        'donvingoai02',
        'donvingoai03',
        'donvingoai04',
      ],
      loaicongvan: 'loaiCV000002',
      cb_nhap: 'canbo_000003',
      domat: null,
      dokhan: null,
      ngay: '09-03-2022',
      hieuluc: null,
      trichyeu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum iaculis pellentesque. Nullam pellentesque, mi ac eleifend semper, velit arcu varius eros, et rhoncus nulla massa et neque. Maecenas ac viverra mauris. Proin tristique, diam ac vulputate pellentesque, lectus dolor pharetra arcu, eget feugiat urna dolor in metus. Suspendisse sit amet vulputate augue. Nulla facilisi. Nulla enim neque, convallis nec erat vitae, tempus laoreet lectus. Vestibulum tempor ultrices arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer a facilisis lorem. Praesent interdum arcu id arcu dapibus facilisis quis id nisi. Aliquam vitae orci ut nibh porta faucibus. Aliquam convallis leo nec dui hendrerit, sit amet feugiat urna porta.',
      nguoiky: 'Nguyễn Hoàng Hải',
      chucvu_nguoiky: 'Phó giám đốc',
      soto: '3',
      noiluu: 'Văn phòng khoa CNTT',
      ngaydi: '05/15/2022',
      taptin: [{
        path: '4.pdf',
        name: '4.pdf',
      },],
      xuly: [
        {
          canbo: 'canbo_000003',
          thoigian: '05/15/2022 10:05:55',
          noidung: 'Tạo mới công văn',
        },
      ],
    },
    {
      _id: 'cvdi_0000002',
      so: '97/QĐ-ĐHCT',
      dv_nhan: [
        'donvi0000001',
        'donvi0000002',
      ],
      loaicongvan: 'loaiCV000002',
      cb_nhap: 'canbo_000019',
      domat: null,
      dokhan: null,
      ngay: '09-03-2022',
      hieuluc: null,
      trichyeu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum iaculis pellentesque. Nullam pellentesque, mi ac eleifend semper, velit arcu varius eros, et rhoncus nulla massa et neque. Maecenas ac viverra mauris. Proin tristique, diam ac vulputate pellentesque, lectus dolor pharetra arcu, eget feugiat urna dolor in metus. Suspendisse sit amet vulputate augue. Nulla facilisi. Nulla enim neque, convallis nec erat vitae, tempus laoreet lectus. Vestibulum tempor ultrices arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer a facilisis lorem. Praesent interdum arcu id arcu dapibus facilisis quis id nisi. Aliquam vitae orci ut nibh porta faucibus. Aliquam convallis leo nec dui hendrerit, sit amet feugiat urna porta.',
      nguoiky: 'Nguyễn Hoàng Hải',
      chucvu_nguoiky: 'Phó giám đốc',
      soto: '3',
      noiluu: 'Văn phòng khoa CNTT',
      ngaydi: '05/15/2022',
      taptin: [{
        path: '5.pdf',
        name: '5.pdf',
      },],
      xuly: [
        {
          canbo: 'canbo_000019',
          thoigian: '05/15/2022 10:05:55',
          noidung: 'Tạo mới công văn',
        },
      ],
    },
  ]);

  console.log(`Tạo ${congvandi.length} công văn đi:`);
  congvandi.map(el => console.log(`- ${el._id}`));
}

/**
 * Hàm viết hoa ký tự đầu tiên
 * @param {String} string Chuỗi ký tự
 * @returns Chuỗi
 * @author Thomas Konings
 */
function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Hàm tạo 1 số nguyên ngẫu nhiên trong khoảng `min` - `max`
 * @param {Integer} min số đầu tiên
 * @param {Integer} max số cuối cùng
 * @returns {Integer} Số ngẫu nhiên
 * @author Thomas Konings
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Hàm tạo tên ngẫu nhiên
 * @returns Tên ngẫu nhiên
 * @author Thomas Konings
 */
function generateName() {
  var name1 = ["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized", "bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling", "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal", "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy", "easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic", "expensive", "experienced", "expert", "extraneous", "extroverted", "extra-large", "extra-small", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "faraway", "far-flung", "far-off", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "French", "fresh", "frequent", "friendly", "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard", "hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "inexperienced", "indolent", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old", "old-fashioned", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "organic", "ornate", "ornery", "ordinary", "original", "other", "our", "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "polished", "polite", "political", "pointed", "pointless", "poised", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "precious", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "recent", "reckless", "rectangular", "ready", "real", "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "required", "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich", "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy", "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "secondary", "second-hand", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violet", "violent", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag", "rocky"];

  var name2 = ["people", "history", "way", "art", "world", "information", "map", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "thing", "oven", "community", "definition", "safety", "quality", "development", "language", "management", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis", "policy", "series", "thought", "basis", "boyfriend", "direction", "strategy", "technology", "army", "camera", "freedom", "paper", "environment", "child", "instance", "month", "truth", "marketing", "university", "writing", "article", "department", "difference", "goal", "news", "audience", "fishing", "growth", "income", "marriage", "user", "combination", "failure", "meaning", "medicine", "philosophy", "teacher", "communication", "night", "chemistry", "disease", "disk", "energy", "nation", "road", "role", "soup", "advertising", "location", "success", "addition", "apartment", "education", "math", "moment", "painting", "politics", "attention", "decision", "event", "property", "shopping", "student", "wood", "competition", "distribution", "entertainment", "office", "population", "president", "unit", "category", "cigarette", "context", "introduction", "opportunity", "performance", "driver", "flight", "length", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "debate", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth", "estate", "foundation", "grandmother", "heart", "perspective", "photo", "recipe", "studio", "topic", "collection", "depression", "imagination", "passion", "percentage", "resource", "setting", "ad", "agency", "college", "connection", "criticism", "debt", "description", "memory", "patience", "secretary", "solution", "administration", "aspect", "attitude", "director", "personality", "psychology", "recommendation", "response", "selection", "storage", "version", "alcohol", "argument", "complaint", "contract", "emphasis", "highway", "loss", "membership", "possession", "preparation", "steak", "union", "agreement", "cancer", "currency", "employment", "engineering", "entry", "interaction", "limit", "mixture", "preference", "region", "republic", "seat", "tradition", "virus", "actor", "classroom", "delivery", "device", "difficulty", "drama", "election", "engine", "football", "guidance", "hotel", "match", "owner", "priority", "protection", "suggestion", "tension", "variation", "anxiety", "atmosphere", "awareness", "bread", "climate", "comparison", "confusion", "construction", "elevator", "emotion", "employee", "employer", "guest", "height", "leadership", "mall", "manager", "operation", "recording", "respect", "sample", "transportation", "boring", "charity", "cousin", "disaster", "editor", "efficiency", "excitement", "extent", "feedback", "guitar", "homework", "leader", "mom", "outcome", "permission", "presentation", "promotion", "reflection", "refrigerator", "resolution", "revenue", "session", "singer", "tennis", "basket", "bonus", "cabinet", "childhood", "church", "clothes", "coffee", "dinner", "drawing", "hair", "hearing", "initiative", "judgment", "lab", "measurement", "mode", "mud", "orange", "poetry", "police", "possibility", "procedure", "queen", "ratio", "relation", "restaurant", "satisfaction", "sector", "signature", "significance", "song", "tooth", "town", "vehicle", "volume", "wife", "accident", "airport", "appointment", "arrival", "assumption", "baseball", "chapter", "committee", "conversation", "database", "enthusiasm", "error", "explanation", "farmer", "gate", "girl", "hall", "historian", "hospital", "injury", "instruction", "maintenance", "manufacturer", "meal", "perception", "pie", "poem", "presence", "proposal", "reception", "replacement", "revolution", "river", "son", "speech", "tea", "village", "warning", "winner", "worker", "writer", "assistance", "breath", "buyer", "chest", "chocolate", "conclusion", "contribution", "cookie", "courage", "desk", "drawer", "establishment", "examination", "garbage", "grocery", "honey", "impression", "improvement", "independence", "insect", "inspection", "inspector", "king", "ladder", "menu", "penalty", "piano", "potato", "profession", "professor", "quantity", "reaction", "requirement", "salad", "sister", "supermarket", "tongue", "weakness", "wedding", "affair", "ambition", "analyst", "apple", "assignment", "assistant", "bathroom", "bedroom", "beer", "birthday", "celebration", "championship", "cheek", "client", "consequence", "departure", "diamond", "dirt", "ear", "fortune", "friendship", "funeral", "gene", "girlfriend", "hat", "indication", "intention", "lady", "midnight", "negotiation", "obligation", "passenger", "pizza", "platform", "poet", "pollution", "recognition", "reputation", "shirt", "speaker", "stranger", "surgery", "sympathy", "tale", "throat", "trainer", "uncle", "youth", "time", "work", "film", "water", "money", "example", "while", "business", "study", "game", "life", "form", "air", "day", "place", "number", "part", "field", "fish", "back", "process", "heat", "hand", "experience", "job", "book", "end", "point", "type", "home", "economy", "value", "body", "market", "guide", "interest", "state", "radio", "course", "company", "price", "size", "card", "list", "mind", "trade", "line", "care", "group", "risk", "word", "fat", "force", "key", "light", "training", "name", "school", "top", "amount", "level", "order", "practice", "research", "sense", "service", "piece", "web", "boss", "sport", "fun", "house", "page", "term", "test", "answer", "sound", "focus", "matter", "kind", "soil", "board", "oil", "picture", "access", "garden", "range", "rate", "reason", "future", "site", "demand", "exercise", "image", "case", "cause", "coast", "action", "age", "bad", "boat", "record", "result", "section", "building", "mouse", "cash", "class", "period", "plan", "store", "tax", "side", "subject", "space", "rule", "stock", "weather", "chance", "figure", "man", "model", "source", "beginning", "earth", "program", "chicken", "design", "feature", "head", "material", "purpose", "question", "rock", "salt", "act", "birth", "car", "dog", "object", "scale", "sun", "note", "profit", "rent", "speed", "style", "war", "bank", "craft", "half", "inside", "outside", "standard", "bus", "exchange", "eye", "fire", "position", "pressure", "stress", "advantage", "benefit", "box", "frame", "issue", "step", "cycle", "face", "item", "metal", "paint", "review", "room", "screen", "structure", "view", "account", "ball", "discipline", "medium", "share", "balance", "bit", "black", "bottom", "choice", "gift", "impact", "machine", "shape", "tool", "wind", "address", "average", "career", "culture", "morning", "pot", "sign", "table", "task", "condition", "contact", "credit", "egg", "hope", "ice", "network", "north", "square", "attempt", "date", "effect", "link", "post", "star", "voice", "capital", "challenge", "friend", "self", "shot", "brush", "couple", "exit", "front", "function", "lack", "living", "plant", "plastic", "spot", "summer", "taste", "theme", "track", "wing", "brain", "button", "click", "desire", "foot", "gas", "influence", "notice", "rain", "wall", "base", "damage", "distance", "feeling", "pair", "savings", "staff", "sugar", "target", "text", "animal", "author", "budget", "discount", "file", "ground", "lesson", "minute", "officer", "phase", "reference", "register", "sky", "stage", "stick", "title", "trouble", "bowl", "bridge", "campaign", "character", "club", "edge", "evidence", "fan", "letter", "lock", "maximum", "novel", "option", "pack", "park", "quarter", "skin", "sort", "weight", "baby", "background", "carry", "dish", "factor", "fruit", "glass", "joint", "master", "muscle", "red", "strength", "traffic", "trip", "vegetable", "appeal", "chart", "gear", "ideal", "kitchen", "land", "log", "mother", "net", "party", "principle", "relative", "sale", "season", "signal", "spirit", "street", "tree", "wave", "belt", "bench", "commission", "copy", "drop", "minimum", "path", "progress", "project", "sea", "south", "status", "stuff", "ticket", "tour", "angle", "blue", "breakfast", "confidence", "daughter", "degree", "doctor", "dot", "dream", "duty", "essay", "father", "fee", "finance", "hour", "juice", "luck", "milk", "mouth", "peace", "pipe", "stable", "storm", "substance", "team", "trick", "afternoon", "bat", "beach", "blank", "catch", "chain", "consideration", "cream", "crew", "detail", "gold", "interview", "kid", "mark", "mission", "pain", "pleasure", "score", "screw", "sex", "shop", "shower", "suit", "tone", "window", "agent", "band", "bath", "block", "bone", "calendar", "candidate", "cap", "coat", "contest", "corner", "court", "cup", "district", "door", "east", "finger", "garage", "guarantee", "hole", "hook", "implement", "layer", "lecture", "lie", "manner", "meeting", "nose", "parking", "partner", "profile", "rice", "routine", "schedule", "swimming", "telephone", "tip", "winter", "airline", "bag", "battle", "bed", "bill", "bother", "cake", "code", "curve", "designer", "dimension", "dress", "ease", "emergency", "evening", "extension", "farm", "fight", "gap", "grade", "holiday", "horror", "horse", "host", "husband", "loan", "mistake", "mountain", "nail", "noise", "occasion", "package", "patient", "pause", "phrase", "proof", "race", "relief", "sand", "sentence", "shoulder", "smoke", "stomach", "string", "tourist", "towel", "vacation", "west", "wheel", "wine", "arm", "aside", "associate", "bet", "blow", "border", "branch", "breast", "brother", "buddy", "bunch", "chip", "coach", "cross", "document", "draft", "dust", "expert", "floor", "god", "golf", "habit", "iron", "judge", "knife", "landscape", "league", "mail", "mess", "native", "opening", "parent", "pattern", "pin", "pool", "pound", "request", "salary", "shame", "shelter", "shoe", "silver", "tackle", "tank", "trust", "assist", "bake", "bar", "bell", "bike", "blame", "boy", "brick", "chair", "closet", "clue", "collar", "comment", "conference", "devil", "diet", "fear", "fuel", "glove", "jacket", "lunch", "monitor", "mortgage", "nurse", "pace", "panic", "peak", "plane", "reward", "row", "sandwich", "shock", "spite", "spray", "surprise", "till", "transition", "weekend", "welcome", "yard", "alarm", "bend", "bicycle", "bite", "blind", "bottle", "cable", "candle", "clerk", "cloud", "concert", "counter", "flower", "grandfather", "harm", "knee", "lawyer", "leather", "load", "mirror", "neck", "pension", "plate", "purple", "ruin", "ship", "skirt", "slice", "snow", "specialist", "stroke", "switch", "trash", "tune", "zone", "anger", "award", "bid", "bitter", "boot", "bug", "camp", "candy", "carpet", "cat", "champion", "channel", "clock", "comfort", "cow", "crack", "engineer", "entrance", "fault", "grass", "guy", "hell", "highlight", "incident", "island", "joke", "jury", "leg", "lip", "mate", "motor", "nerve", "passage", "pen", "pride", "priest", "prize", "promise", "resident", "resort", "ring", "roof", "rope", "sail", "scheme", "script", "sock", "station", "toe", "tower", "truck", "witness", "can", "will", "other", "use", "make", "good", "look", "help", "go", "great", "being", "still", "public", "read", "keep", "start", "give", "human", "local", "general", "specific", "long", "play", "feel", "high", "put", "common", "set", "change", "simple", "past", "big", "possible", "particular", "major", "personal", "current", "national", "cut", "natural", "physical", "show", "try", "check", "second", "call", "move", "pay", "let", "increase", "single", "individual", "turn", "ask", "buy", "guard", "hold", "main", "offer", "potential", "professional", "international", "travel", "cook", "alternative", "special", "working", "whole", "dance", "excuse", "cold", "commercial", "low", "purchase", "deal", "primary", "worth", "fall", "necessary", "positive", "produce", "search", "present", "spend", "talk", "creative", "tell", "cost", "drive", "green", "support", "glad", "remove", "return", "run", "complex", "due", "effective", "middle", "regular", "reserve", "independent", "leave", "original", "reach", "rest", "serve", "watch", "beautiful", "charge", "active", "break", "negative", "safe", "stay", "visit", "visual", "affect", "cover", "report", "rise", "walk", "white", "junior", "pick", "unique", "classic", "final", "lift", "mix", "private", "stop", "teach", "western", "concern", "familiar", "fly", "official", "broad", "comfortable", "gain", "rich", "save", "stand", "young", "heavy", "lead", "listen", "valuable", "worry", "handle", "leading", "meet", "release", "sell", "finish", "normal", "press", "ride", "secret", "spread", "spring", "tough", "wait", "brown", "deep", "display", "flow", "hit", "objective", "shoot", "touch", "cancel", "chemical", "cry", "dump", "extreme", "push", "conflict", "eat", "fill", "formal", "jump", "kick", "opposite", "pass", "pitch", "remote", "total", "treat", "vast", "abuse", "beat", "burn", "deposit", "print", "raise", "sleep", "somewhere", "advance", "consist", "dark", "double", "draw", "equal", "fix", "hire", "internal", "join", "kill", "sensitive", "tap", "win", "attack", "claim", "constant", "drag", "drink", "guess", "minor", "pull", "raw", "soft", "solid", "wear", "weird", "wonder", "annual", "count", "dead", "doubt", "feed", "forever", "impress", "repeat", "round", "sing", "slide", "strip", "wish", "combine", "command", "dig", "divide", "equivalent", "hang", "hunt", "initial", "march", "mention", "spiritual", "survey", "tie", "adult", "brief", "crazy", "escape", "gather", "hate", "prior", "repair", "rough", "sad", "scratch", "sick", "strike", "employ", "external", "hurt", "illegal", "laugh", "lay", "mobile", "nasty", "ordinary", "respond", "royal", "senior", "split", "strain", "struggle", "swim", "train", "upper", "wash", "yellow", "convert", "crash", "dependent", "fold", "funny", "grab", "hide", "miss", "permit", "quote", "recover", "resolve", "roll", "sink", "slip", "spare", "suspect", "sweet", "swing", "twist", "upstairs", "usual", "abroad", "brave", "calm", "concentrate", "estimate", "grand", "male", "mine", "prompt", "quiet", "refuse", "regret", "reveal", "rush", "shake", "shift", "shine", "steal", "suck", "surround", "bear", "brilliant", "dare", "dear", "delay", "drunk", "female", "hurry", "inevitable", "invite", "kiss", "neat", "pop", "punch", "quit", "reply", "representative", "resist", "rip", "rub", "silly", "smile", "spell", "stretch", "stupid", "tear", "temporary", "tomorrow", "wake", "wrap", "yesterday", "Thomas", "Tom", "Lieuwe"];

  var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
  return name;

}

/**
 * Tạo thông tin cho 1 cán bộ
 * @param {Integer} mcb - Mã số cán bộ
 * @param {ObjectID} dv - ID của đơn vị mà cán bộ thuộc về
 * @param {Integer} type - Loại cán bộ 1: admin 2: lãnh đạo 3: văn thư 0: khóa còn lại là bình thường
 * @returns 
 */
function generateCB(mcb, dv, type) {
  var holot = generateName();
  var ten = generateName().split(' ');
  var ms = mcb.toString();
  while (ms.length < 6) ms = '0' + ms;
  return {
    _id: 'canbo_' + ms,
    donvi: dv,
    ma: ms,
    matkhau: passwordHash.generate('12345'),
    holot: holot,
    ten: ten[0],
    email: (holot.slice(' ')[0].charAt(0) + holot.slice(' ')[1].charAt(0) + ten[0]).toLowerCase() + '@gmail.com',
    sdt: '03' + getRandomInt(10000000, 99999999).toString(),
    laadmin: type === 1,
    lalanhdao: type === 2,
    lavanthu: type === 3,
    actived: type !== 0,
  };
}

start();
