const express = require('express');
const router = express.Router();
const beerRouter = require('./routes/beer');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
