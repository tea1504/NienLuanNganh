var express = require('express');
var router = express.Router();
var doKhanModel = require('../model/dokhan');

/* GET users listing. */
router.get('/', (req, res, next) => {
  doKhanModel.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;

  doKhanModel.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res, next) => {
  var ten = req.body.ten;

  doKhanModel.create({
    ten: ten,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  var ten = req.body.ten;

  doKhanModel.findByIdAndUpdate(id, {
    ten: ten,
  })
    .then(data => {
      return doKhanModel.findById(data._id);
    })
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id;

  doKhanModel.findByIdAndDelete(id)
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;