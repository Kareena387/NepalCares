var express = require('express');
var router = express.Router();

router.get('/header',function(req,res,next){
    res.render('header',{title:'header'});
});

    

module.exports = router;


