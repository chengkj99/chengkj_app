# chengkj_app

## 20160808
###问题
#### 为什么项目中没有node-modules这个文件夹？
原因是我在webstrom中去掉了该文件夹的索引，所以在webstrom中没有出现，其实其是存在的。

#### npm install ejs-mate --save 之后为什么在package.json中没有含有这个模块记录。

#### 后缀名为.html的文件无法被路由？
后来安装ejs-mat之后,在app配置文件写以下的语句被解决。具体原因：可能是用了模板引擎，后缀名只能是模板引擎的后缀名吧，其他后缀名不识别啊，添加下面这句话就好了。
    app.set('view engine', 'html');
    app.engine('html', require('ejs-mate'));
#### gulp和NodeJs中流的概念。
普通的文件copy是先读到内存中再写到新的文件地址；和普通的文件copy方式不同的是，通过流进行文件复制，类似于两个木桶用中间的一个管道进行内容传输，减小内存占有量。