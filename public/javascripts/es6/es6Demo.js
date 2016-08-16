/**
 * Created by MaxCheng on 2016/8/15.
 */
//let命令所在的代码块内有效,适用于for循环等
// one:
{
    let a = 10;
    var b = 1;
}

console.log('b:'+b) //1
console.log('a:'+a) //ReferenceError: a is not defined

//two:
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
