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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);
	var index = new Vue({
	    el: "#app",
	    data: {
	        userMsg: "",
	        taskInfo: [{
	            "taskTitle": "There is no task",
	            "taskDes": "Please New Your Task",
	            "taskId": ""
	        }, {
	            "taskTitle": "There is no task",
	            "taskDes": "Please New Your Task",
	            "taskId": ""
	        }, {
	            "taskTitle": "There is no task",
	            "taskDes": "Please New Your Task",
	            "taskId": ""
	        }],
	        addFlag: false,
	        cl1: true,
	        cl2: false,
	        cl3: false
	    },
	    methods: {
	        addTask: function addTask() {
	            this.addFlag = true;
	        },
	        closeTask: function closeTask() {
	            this.addFlag = false;
	        },
	        taskKindChecked: function taskKindChecked(e) {
	            var event = e.target;
	            event.className = 'active';
	        },
	        newTask: function newTask() {
	            $.post('/newTask_interface', {
	                "taskTitle": $("#taskTitle").val(),
	                "taskDes": $("#taskDes").val()
	            }, function (data) {
	                alert(data); // 为什么无效?
	            });
	        },
	        taskMore: function taskMore(id) {
	            location.href = "/taskMore?taskId=" + id;
	        }
	    },
	    compiled: function compiled() {},
	    ready: function ready() {

	        var mc = new Hammer(document.getElementById('content'));
	        mc.on("panleft panright", function (e) {
	            var event = e.target;
	            var thisData = parseInt($(event).parent().attr('data'));
	            if (e.type === "panright") {
	                if (thisData === 1) {
	                    return false;
	                } else {
	                    thisData--;
	                    $(".content-list").each(function () {
	                        $(this).hide();
	                        if (parseInt($(this).attr('data')) == thisData) {
	                            $(this).show();
	                        }
	                    });
	                    $(".cicle-list").each(function () {
	                        $(this).removeClass('cicle-active');
	                        if (parseInt($(this).attr('data')) == thisData) {
	                            $(this).addClass('cicle-active');
	                        }
	                    });
	                }
	            } else if (e.type === "panleft") {
	                if (thisData === 3) {
	                    return false;
	                } else {
	                    thisData++;
	                    $(".content-list").each(function () {
	                        $(this).hide();
	                        if (parseInt($(this).attr('data')) == thisData) {
	                            $(this).show();
	                        }
	                    });
	                    $(".cicle-list").each(function () {
	                        $(this).removeClass('cicle-active');
	                        if (parseInt($(this).attr('data')) == thisData) {
	                            $(this).addClass('cicle-active');
	                        }
	                    });
	                }
	            }
	        });
	        $.post('/userMsg_interface', function (data) {
	            index.userMsg = data.data[0];
	        });

	        $.post('/indexTaskShow_interface', function (data) {
	            if (data.data.length == "") {
	                return false;
	            } else if (data.data.length == 1) {
	                index.taskInfo[0].taskTitle = data.data[0].taskTitle;
	                index.taskInfo[0].taskDes = data.data[0].taskDes;
	                index.taskInfo[0].taskId = data.data[0].taskId;
	            } else if (data.data.length == 2) {
	                index.taskInfo[0].taskTitle = data.data[0].taskTitle;
	                index.taskInfo[0].taskDes = data.data[0].taskDes;
	                index.taskInfo[0].taskId = data.data[0].taskId;
	                index.taskInfo[1].taskTitle = data.data[1].taskTitle;
	                index.taskInfo[1].taskDes = data.data[1].taskDes;
	                index.taskInfo[1].taskId = data.data[1].taskId;
	            } else {
	                index.taskInfo = data.data;
	            }
	        });
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);