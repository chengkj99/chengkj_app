/**
 * Created by MaxCheng on 2016/8/8.
 */

var qiniu = require("qiniu");
var multiparty = require('multiparty');
//var qiniuJs = require("qiniu-js");

var async = require('async');

// console.log("vvvvvhhhhvvv");
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:400,
            msg: 'error'
        });
    }else{
        res.json(ret);
    }
};

//构建上传策略函数
var uptoken=function(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
    return putPolicy.token();
}


//构造上传函数
var uploadFile=function(uptoken, key, localFile,res) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key, ret.persistentId);
            jsonWrite(res,ret);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
        }
    });
}

//var test=function(callback){
//    console.log("vvvvvhhhhvvv");
//    callback(null, 333);
//}

var test=function(){
    console.log("vvvvvhhhhvvv");
}

module.exports = {
    qiniuUploader: function (req, res, next) {

        console.log("--------------------")

        //需要填写你的 Access Key 和 Secret Key
        // qiniu.conf.ACCESS_KEY = '9y5Q1xT_G3zPRdBhC5XLHipwusldQLvRMdHwDGOT';
        // qiniu.conf.SECRET_KEY = 'n_X1GRiSxIRCH0bNYHtDTRtOuvfxEqnJ2BaQamRt';

        //需要填写你的 Access Key 和 Secret Key
        qiniu.conf.ACCESS_KEY = 'HZy7-UqBCXQJkKRzxc8vHwO75DtaXfAnDozkxjcA';
        qiniu.conf.SECRET_KEY = 'p-Evnn4tFPQ-oJHo5Y0aqkyLWK9MrxKSAVcaU6M0';

        //要上传的空间
        bucket = 'sel-img';
        var form = new multiparty.Form({uploadDir: './public/files/'});
        var retInfo=[];
        //上传完成后处理

        var ss=res;
        var ttlens=0;
        var originalFilename='';
        var wherePathArr=[];

        form.parse(req, function(err, fields, files) {
            var num=0;
            var numFilters=[];
            console.log("files.file.length:",files.file.length)
            for(var i=0;i<files.file.length;i++){
                if(files.file[i].originalFilename!=''){
                    wherePathArr.push(i);
                    num++;
                }else{
                    numFilters.push(i);
                }
            }
            if(num!=0){
                var i;
                for(i=0;i<3;i++){
                    if(numFilters.length==1){
                        if(numFilters==i){
                            continue;
                        }
                    }
                    if(numFilters.length==2){
                        if(numFilters[0]==i){
                            continue;
                        }
                        if(numFilters[1]==i){
                            continue;
                        }
                    }

                    async.series({
                            ones: function(callback){
                                //循环开始
                                //var filePath="/Users/wd/git/datahub_web_admin/public/files/hVCuYZhjDWg8HNz1w00Y2D3Q.png";
                                console.log('global.__base:'+global.__base)
                                var originFileName=files.file[i].originalFilename;
                                console.log("files.file[i]:",files.file[i])
                                //console.log(originFileName)
                                var filePath=global.__base+files.file[i].path.replace("public\\","").replace("\\","/");
                                var times=new Date().getTime();
                                key = originFileName+"_"+times+".jpg";
                                var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
                                var token=putPolicy.token();
                                var extra = new qiniu.io.PutExtra();
                                qiniu.io.putFile(token, key, filePath, extra, function(err, ret) {
                                    if(!err) {
                                        //console.log(ret.hash, ret.key, ret.persistentId);
                                        callback(null, ret);
                                    } else {
                                        console.log(err);
                                    }
                                });
                            }
                        },
                        function(err, results) {
                            retInfo.push(results.ones);
                            ttlens++;
                            if(ttlens==num){
                                res.json({
                                    code:200,
                                    msg: 'OK',
                                    //data:retInfo
                                    data:retInfo,
                                    wherePathArr:wherePathArr
                                });
                            }
                        });
                }
            }
        })
    }
}