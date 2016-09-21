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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(11);
	var mine = new Vue({
	    el: "#app",
	    data: {
	        userMsg: ""
	    },
	    methods: {
	        moreShow: function moreShow() {
	            var flag = $("#aboutMine").attr('data');
	            if (flag == 0) {
	                $("#aboutMine").css('width', '45%');
	                $("#content").css('width', '55%');
	                $("#aboutMine").attr('data', "1");
	                $("#aboutMine").show();
	            } else {
	                $("#aboutMine").css('width', '0%');
	                $("#content").css('width', '100%');
	                $("#aboutMine").attr('data', "0");
	                $("#aboutMine").hide();
	            }
	        },
	        loginOut: function loginOut() {
	            $.post('/loginOut', function (data) {
	                if (data == 1) {
	                    location.reload();
	                } else {
	                    alert('退出失败');
	                }
	            });
	        }
	    },
	    compiled: function compiled() {},
	    ready: function ready() {
	        var mc = new Hammer(document.getElementById('content'));
	        mc.on("panleft", function (e) {
	            if (e.type === "panleft") {
	                $("#aboutMine").css('width', '0%');
	                $("#content").css('width', '100%');
	                $("#aboutMine").attr('data', "0");
	                $("#aboutMine").hide();
	            }
	        });

	        $.post('/userMsg_interface', function (data) {
	            mine.userMsg = data.data[0];
	        });
	    }

	});

/***/ },

/***/ 11:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });