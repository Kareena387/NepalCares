var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('profilepage',{title:'Profile'});
});

router.get('/donation',function(req,res,next){
    res.render('donations',{title:'Donations '})
})

module.exports = router;


