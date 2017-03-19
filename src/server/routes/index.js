var express = require('express');
var router = express.Router();
var data = require("../data")

router.get('/game', function(req, res) {
    res.render('index.ejs');
});

router.get('/employee-chain', function(req, res) {
    res.render('employee-chain');
});

router.get('/', function(req, res) {
    res.redirect('/game');
});

router.get('/data', function(req, res) {
    res.send(data);
});

module.exports = router;
