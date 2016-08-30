
var AV = require('leancloud-storage');

// 应用 ID，用来识别应用
var APP_ID = '9fJp9ATb9qU9sBXxG9MPYWJD-gzGzoHsz';

// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
var APP_KEY = 'W37v9wJiGVOeJMlYuhbm9LzG';

// 初始化
AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
	testabc: 'abc123'
}).then(function() {
	alert('LeanCloud works!');
}).catch(function(err) {
	alert('error:' + err);
});