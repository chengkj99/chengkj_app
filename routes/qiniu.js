/**
 * Created by MaxCheng on 2016/8/27.
 */
//七牛上传的图片路径须是项目文件下的？？？是的啊
//根据图片的张数进行一张一张的上传图片并返回相应的图片路径
//    实现步骤：
    /*
    * 1.接收图片对象
    * 2.遍历对象一张一张上传
    * 3.每上传一张之后返回的路径存到数组中，并通过接口返回
    * */
var qiniu = require("qiniu");//七牛
var multiparty = require('multiparty');//文件上传模块



module.exports={
    upLoader:function(req,res,next){
        var insertSQL_params = [];
        console.log('__dirname',__dirname)
        var form = new multiparty.Form();//实例一个multiparty
        form.uploadDir = "../images/qiniu_img/";//设置文件储存路径
        ////开始解析前台传过来的文件
        form.parse(req,function (err, fields, files) {
            for (var item in fields){
                insertSQL_params.push(fields[item][0])
                console.log(fields[item][0])
            }
            console.log('----------:')
            console.log(err)
            console.log(fields)
            console.log(files)
            
        })

//        qi niu code start
//需要填写你的 Access Key 和 Secret Key
        qiniu.conf.ACCESS_KEY = '9y5Q1xT_G3zPRdBhC5XLHipwusldQLvRMdHwDGOT';
        qiniu.conf.SECRET_KEY = 'n_X1GRiSxIRCH0bNYHtDTRtOuvfxEqnJ2BaQamRt';

//要上传的空间
        bucket = 'images-sel';

//上传到七牛后保存的文件名
        let time=new Date().getTime();
        key = time+'node.png';

//构建上传策略函数
        function uptoken(bucket, key) {
            var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
            return putPolicy.token();
        }

//生成上传 Token
        token = uptoken(bucket, key);

//要上传文件的本地路径
        filePath='D:/MyRepositery/chengkj_app/public/images/myself.jpg';


//构造上传函数
        function uploadFile(uptoken, key, localFile) {
            var extra = new qiniu.io.PutExtra();
            qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
                if(!err) {
                    // 上传成功， 处理返回值
                    console.log(ret.hash, ret.key, ret.persistentId);
                    res.json({
                        code:200,
                        states:'ok',
                        data:{
                            hash:ret.hash,
                            key:ret.key,
                            persistentId:ret.persistentId
                        }
                    })
                } else {
                    // 上传失败， 处理返回代码
                    console.log(err);
                    res.json({
                        err:err
                    })
                }
            });
        }

//调用uploadFile上传
        uploadFile(token, key, filePath);


//        qi niu code end



    }
}
