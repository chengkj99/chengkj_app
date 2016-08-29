/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by MaxCheng on 2016/8/15.
	 */
	//let命令所在的代码块内有效,适用于for循环等
	// one:
	{
	  var _a = 10;
	  var b = 1;
	}

	console.log('b:' + b); //1
	console.log('a:' + a); //ReferenceError: a is not defined

	//two:
	var a = [];

	var _loop = function _loop(i) {
	  a[i] = function () {
	    console.log(i);
	  };
	};

	for (var i = 0; i < 10; i++) {
	  _loop(i);
	}
	a[6]();

	document.write(new Date());
	document.write('<br>');
	document.write(a[6]());

	function f() {
	  console.log('I am outside!');
	}
	(function () {
	  if (false) {
	    // 重复声明一次函数f
	    var _f = function _f() {
	      console.log('I am inside!');
	    };
	  }

	  f();
	})();

	function f() {
	  console.log('outoutoutout  I am outside!');
	}
	(function () {
	  if (false) {
	    // 重复声明一次函数f
	    var _f2 = function _f2() {
	      console.log('ininiininin   I am inside!');
	    };
	  }

	  f();
	})();

	// const a=10;
	// a=5;//报错

/***/ }
/******/ ]);