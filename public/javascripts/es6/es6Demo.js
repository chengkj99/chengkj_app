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
let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();

document.write(new Date())
document.write('<br>')
document.write(a[6]());


function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();

}());

function f() { console.log('outoutoutout  I am outside!'); }
(function () {
  if(false) {
    // 重复声明一次函数f
    function f() { console.log('ininiininin   I am inside!'); }
  }

  f();
}());

// const a=10;
// a=5;//报错


