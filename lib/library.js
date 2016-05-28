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
	    }
	
	    _createClass(Library, [{
	        key: 'start',
	        value: function start(data) {
	            var file,
	                uri,
	                el,
	                nCountNum = 0,
	                nSliceSize = 500000,
	                nTotalCount;
	
	            var reader = new FileReader();
	
	            el = document.getElementById(data.el);
	
	            if (el.files.length <= 0) {
	                alert('请选择文件!');
	            }
	
	            file = el.files[0];
	            uri = data.uri;
	            nTotalCount = Math.ceil(file.size / nSliceSize);
	
	            reader.onloadend = function () {
	                var xhr,
	                    fileData = new FormData();
	
	                var start = nCountNum * nSliceSize,
	                    end = Math.min(start + nSliceSize, file.size);
	
	                fileData.append('file', file.slice(start, end));
	                fileData.append('name', file.name);
	                fileData.append('size', file.size);
	                fileData.append('type', file.type);
	                fileData.append('totalCount', nTotalCount);
	                fileData.append('indexCount', nCountNum);
	                fileData.append('trueName', file.name.substring(0, file.name.lastIndexOf('.')));
	
	                if (reader.error) {
	                    console.log(reader.error);
	                } else {
	                    xhr = new XMLHttpRequest();
	                    xhr.open('POST', uri, true);
	                    xhr.overrideMimeType('application/octet-stream');
	                    xhr.send(fileData);
	                    xhr.onreadystatechange = function () {
	                        var rst;
	
	                        if (xhr.readyState === 4) {
	                            if (xhr.status === 200) {
	                                rst = xhr.responseText;
	                                console.log(nCountNum, nTotalCount);
	                                console.log(rst);
	                                if (rst) {
	                                    // console.log(JSON.parse(data));
	                                }
	                            };
	                        };
	                    };
	                }
	                if (nCountNum < nTotalCount - 1) {
	                    nCountNum++;
	                    reader.onloadend();
	                }
	            };
	
	            reader.readAsBinaryString(file);
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