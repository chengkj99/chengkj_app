var express = require('express');
var router = express.Router();
var qiniuDao=require('./upload_qiniu');
var qiniu=require('./qiniu')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
