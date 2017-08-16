var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/get_info',function(req,res,next) {
    var uid=req.query.user_id;
    console.log(uid);
    request.get('http://127.0.0.1/hou/user/get_user?uid='+uid, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});
module.exports = router;
