var express = require('express');
var router = express.Router();


router.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'chengkj Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'chengkj web app' });
});




router.get('/a', function(req, res, next) {
  res.render('a', { title: 'chengkj web app' });
});

router.get('/b', function(req, res, next) {
  res.render('b', { title: 'chengkj web app' });
});

router.get('/abc', function(req, res, next) {
  res.render('abc', { title: 'chengkj web app' });
});

router.get('/first', function(req, res, next) {
  res.render('first', { title: 'first test' });
});

module.exports = router;
