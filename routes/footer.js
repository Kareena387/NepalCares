var express = require('express');
var router = express.Router();

router.get('/footer',function(req,res,next){
    res.render('footer',{title:'footer'});
});

    

module.exports = router;


