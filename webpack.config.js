/**
 * Created by MaxCheng on 2016/8/15.
 */

var webpack=require('webpack');
var path=require('path');
module.exports = {
    entry: {
        bundle: "./public/javascripts/es6/main.js",
        file_upload: "./public/javascripts/es6/file_upload.js",
        es6Demo: "./public/javascripts/es6/es6Demo.js",
    },
    output: {//打包输出的文件
        path: __dirname,
        filename: "./public/javascripts/es5/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015',
                //以上部分是支持es6语法
            }
        ]
    },
resolve: {// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
}
}