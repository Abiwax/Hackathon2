/*eslint-env node */
var express = require('express');
var db2 = require('./db2setup.js');
var router = express.Router();




router.get('/getActualBuy', function(req, res, next) {
  db2.getActualBuy(req,res);
});

router.get('/getActualRent', function(req, res, next) {
  db2.getActualRent(req,res);
});


router.get('/getPredictedRent', function(req, res, next) {
  db2.getPredictedRent(req,res);
});

router.get('/getPredictedBuy', function(req, res, next) {
  db2.getPredictedBuy(req,res);
});

module.exports = router;
