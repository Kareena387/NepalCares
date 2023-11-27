var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('cardpayment',{title:'cardpayment'});
});

router.get('/donation',function(req,res,next){
    res.render('donations',{title:'Donations '})
})

module.exports = router;


