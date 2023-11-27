var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('signuppage',{title:'Sign up'});
});

module.exports = router;


