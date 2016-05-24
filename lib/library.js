(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("library", [], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Library = function () {
	    function Library() {
	        _classCallCheck(this, Library);
	
	        this._name = 'Library';
	        this._el = '';
	        this._uri = 'uri';
	        this._methed = 'POST';
	        this._type = 'jpg;png';
	        this._mulit = false;
	        this._size = 'size';
	    }
	
	    _createClass(Library, [{
	        key: 'start',
	        value: function start(data) {
	            var file;
	            var reader = new FileReader();
	
	            this._el = document.getElementById(data.el);
	
	            if (this._el.files.length <= 0) {
	                alert('请选择文件!');
	            }
	
	            file = this._el.files[0];
	
	            reader.onloadstart = function () {
	                console.log('onloadstart');
	            };
	
	            reader.onprogress = function () {
	                console.log('onprogress');
	            };
	
	            reader.onload = function () {
	                console.log('onload');
	            };
	
	            reader.onloadend = function () {
	                var xhr,
	                    fileData = new FormData(),
	                    nCountNum = 0,
	                    nSliceCount = 100,
	                    nFactSize = file.size / nSliceCount,
	                    nFactCount;
	
	                var start = nCountNum * nFactSize,
	                    end = Math.min(start + nFactSize, file.size);
	
	                fileData.append('file', file.slice(start, end));
	                fileData.append('name', file.name);
	                fileData.append('size', file.size);
	                fileData.append('type', file.type);
	                fileData.append('totalCount', nFactCount);
	                fileData.append('indexCount', nCountNum);
	                fileData.append('totalCount', 1);
	                fileData.append('indexCount', 1);
	                fileData.append('trueName', file.name.substring(0, file.name.lastIndexOf('.')));
	
	                //            console.log(file);
	                //            console.log(fileData);
	                if (reader.error) {
	                    console.log(reader.error);
	                } else {
	                    xhr = new XMLHttpRequest();
	                    xhr.open('POST', '../php/index.php', true);
	                    xhr.overrideMimeType('application/octet-stream');
	                    xhr.send(fileData);
	                    xhr.onreadystatechange = function () {
	                        if (xhr.readyState === 4) {
	                            if (xhr.status === 200) {
	                                console.log('upload complete');
	                                console.log('response: ' + xhr.responseText);
	                            };
	                        };
	                    };
	                }
	            };
	
	            reader.readAsBinaryString(file);
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            var self = this;
	
	            self._el ? self._el.value = '' : '';
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        }
	    }]);
	
	    return Library;
	}();
	
	exports.default = Library;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=library.js.map