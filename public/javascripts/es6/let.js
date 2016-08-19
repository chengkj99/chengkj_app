/**
 * Created by MaxCheng on 2016/8/16.
 */
//let 的使用
//  不允许重复声明
//  暂时性死区
//  不存在变量提升
//  暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域

//为什么需要块级作用域？
// 不允许变量提升导致内层变量覆盖外层变量
// 用来计数的循环变量泄露为全局变量。

//ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
//let实际上为JavaScript新增了块级作用域。
//块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());