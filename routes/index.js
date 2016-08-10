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
  res.render('a', { title: 'a web app' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'b web app' });
});
router.get('/c', function(req, res, next) {
  res.render('c', { title: 'c web app' });
});


router.get('/abc', function(req, res, next) {
  res.render('abc', { title: 'abc web app' });
});

router.get('/first', function(req, res, next) {
  res.render('first', { title: 'first web app' });
});

module.exports = router;
