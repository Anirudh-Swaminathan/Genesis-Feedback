var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

var registerConfig = require(path.join(__dirname, '/../' ,'config/registerConfig.js'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {errors : ''});
});

router.get('/thanks', function(req, res, next){
    res.render('feed_rec');
});

router.post('/', function(req, res, next){
    var conn = req.app.locals.connection;

    req.sanitize('lhc').escape();
    req.sanitize('q1').escape();
    req.sanitize('q2').escape();
    req.sanitize('q3').escape();

    var lh = req.body.lhc;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;

    req.assert('lhc','Must be a valid LH').isValidLh();
    req.assert('q1','Question 1 must be answered').notEmpty();
    req.assert('q2','Question 2 must be answered').notEmpty();

    var errors = req.validationErrors();
    if(!errors){
        // Please change me everyday
        conn.query("INSERT into day2(lh,q1,q2,q3) VALUES(?,?,?,?)", [lh,q1,q2,q3], function(err, result){
            if(err){
                console.log("SQL error: " + err);
                console.log("SQL Error!!\n");
                console.log(err.code);
                console.log('\n');
                res.render('index', {errors : 'SQL Error!!'});
            } else {
                res.redirect('/thanks');
            }
        });
    } else {
        console.log('\n\n');
        console.log(errors);
        console.log('\n');
        res.render('index', {errors : errors[0].msg});
    }

});

module.exports = router;
