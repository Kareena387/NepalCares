var express = require('express');
var router = express.Router();
const Description = require('../models/donate')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NepalCares' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'NepalCares' });
});

router.get('/discover', async (req, res, next) => {
  try {
    console.log()
    const donateList = await Description.find();
    console.log(donateList);
    res.render('discover', { title: 'Discover', donateList: donateList });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'NepalCares' });
});

router.get('/joinus', function(req, res, next) {
  res.render('joinus', { title: 'NepalCares' });
});

router.get('/cardpayment', function(req, res, next) {
  res.render('cardpayment', { title: 'NepalCares' });
});

module.exports = router;
