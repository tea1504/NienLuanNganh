var express = require('express');
var router = express.Router();
var donViModel = require('../model/donvi');

/**
 * GET /donvi
 * Lấy toàn bộ dữ liệu trong collection donvi 
 */
router.get('/', (req, res, next) => {
  donViModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

/**
 * GET /donvi/:id
 * Lấy 1 document trong collection donvi
 * @param {IdObject} id - ID của đơn vị
 */
router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  donViModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
