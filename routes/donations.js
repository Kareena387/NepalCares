const express = require('express');
const router = express.Router();
const Description = require('../models/donate');

router.get('/', async (req, res, next) => {
  try {
    console.log()
    const donateList = await Description.find();
    console.log(donateList);
    res.render('donations', { title: 'Donate', donateList: donateList });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
