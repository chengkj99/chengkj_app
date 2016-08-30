var express = require('express');
var router = express.Router();
var qiniuDao=require('./upload_qiniu');
var qiniu=require('./qiniu')

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


router.get('/file', function(req, res, next) {
  res.render('file_upload', { title: 'file upload' });
});

router.get('/es6', function(req, res, next) {
  res.render('es6Demo', { title: 'b web app' });
});



router.get('/test', function(req, res, next) {
  res.render('test', { title: 'b web app' });
});

router.get('/first', function(req, res, next) {
  res.render('first', { title: 'first web app' });
});
router.get('/bundle', function(req, res, next) {
  res.render('bundle', { title: 'a web app' });
});


/*qiniu upload接口*/
router.post('/upload',function(req,res,next){
  console.log('qiniu service---------------------------------');
  qiniuDao.qiniuUploader(req, res, next);
});
router.post('/qiniu',function(req,res,next){

  console.log('---------------------------qiniu----------------------------------------')
  qiniu.upLoader(req,res,next);
})

module.exports = router;
