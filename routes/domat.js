var express = require('express');
var router = express.Router();
var doMatModel = require('../model/domat');

/**
 * GET /domat
 * Lấy toàn bộ dữ liệu trong collection domat 
 */
router.get('/', (req, res, next) => {
  doMatModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})
