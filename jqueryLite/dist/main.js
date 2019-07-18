/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOMNodeCollection; });\nclass DOMNodeCollection{\n  constructor(htmlArray){\n    this.htmlArray = htmlArray;\n  }\n\n  html(string){\n    if (typeof string === 'string') {\n      this.htmlArray.forEach(htmlEl => {\n        htmlEl.innerHTML = string;\n      });\n    }else{\n      return this.htmlArray[0].innerHTML;\n    }\n  }\n\n  empty(){\n    this.html(\"\");\n    // this.htmlArray.forEach(htmlEl => {\n    //   htmlEl.html = \"\";\n    // });\n  }\n\n  append(element){\n    let thingToAppend = \"\"\n    // FIND WHAT TO APPEND\n    if (element instanceof DOMNodeCollection) {\n      element.htmlArray.forEach(htmlEl => {\n        thingToAppend += htmlEl.outerHTML;\n      });\n    } else if (element instanceof HTMLElement) {\n      thingToAppend += element.outerHTML;\n    } else if (typeof element === 'string') {\n      thingToAppend += element\n    }\n    // APPEND TO OUR HTML ARRAY\n    this.htmlArray.forEach(htmlEl => {\n      htmlEl.innerHTML += thingToAppend;\n    })\n  }\n\n  addClass (className) {\n    this.htmlArray.forEach(htmlEl => {\n      htmlEl.classList.add(className);\n    });\n  }\n  \n  attr (attrName, attrValue) {\n    if (attrValue === undefined) {\n      return this.htmlArray[0].getAttribute(attrName);\n    } else {\n      this.htmlArray.forEach(htmlEl => {\n        htmlEl.setAttribute(attrName, attrValue)\n      })\n    }\n  }\n\n\n  removeClass (className) {\n    this.htmlArray.forEach(htmlEl => {\n      htmlEl.classList.remove(className);\n    });\n  }\n\n  children(){\n    let allChildren = [];\n    this.htmlArray.forEach(htmlEl => {\n       allChildren = allChildren.concat(Array.from(htmlEl.children))\n    })\n    return new DOMNodeCollection(allChildren);\n  }\n\n  parent(){\n    let allParents = [];\n    this.htmlArray.forEach(htmlEl => {\n      allParents.push(htmlEl.parentElement);\n    })\n    return new DOMNodeCollection(allParents);\n  }\n\n  find(selector){\n    let found = [];\n    this.htmlArray.forEach(htmlEl => {\n      found = found.concat(Array.from(htmlEl.querySelectorAll(selector)));\n    })\n    return new DOMNodeCollection(found);\n  }\n\n  remove(){\n    this.htmlArray.forEach(htmlEl => {\n      htmlEl.outerHTML = \"\";\n    })\n  }\n\n  on(eventString, cb){\n    this.htmlArray.forEach(htmlEl => {\n      htmlEl.addEventListener(eventString, cb);\n      htmlEl[eventString] = cb;\n    });\n  }\n\n  off(eventString){\n    this.htmlArray.forEach(htmlEl => {\n      htmlEl.removeEventListener(eventString, htmlEl[eventString]);\n      htmlEl[eventString] = null;\n    })\n  }\n\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n\n// $(() => {\n//   const $div = $('.second-div')\n//   const div = document.getElementsByClassName('second-div')\n//   console.log($div)\n//   console.log(div[0])\n//   // $div.append('<p>Hello World</p>')\n//   div[0].textContent = \"Hello World\"\n// });\n\n\nconst $1 =function (selector) {\n  if (typeof selector === 'string'){\n    const nodeList = this.document.querySelectorAll(selector);\n    // debugger\n    // this.console.log(nodeList);\n    const htmlArray = Array.from(nodeList);\n    const DOMNodeObject = new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](htmlArray);\n    return DOMNodeObject;    \n  }else if (selector instanceof HTMLElement) {\n    const arrayOfHtml = [selector];\n    const DOMNodeObject = new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](arrayOfHtml);\n    return DOMNodeObject; \n  }else if(selector instanceof Function){\n    const arr = Array.from(arguments);\n    document.addEventListener(\"DOMContentLoaded\",() => {\n      arr.forEach(fxn => fxn());\n    })\n  }\n  \n}\n\nfunction extend(...objectsAgrs) {\n  const realObj = {}\n  objectsAgrs.forEach(obj => {\n    const keys = Object.keys(obj)\n    keys.forEach(key => {\n      realObj[key] = obj[key];\n    });\n  });\n  return realObj;\n}\n\nfunction ajax(optionObject) {\n\n  const defaults = {\n    method: 'GET',\n    url: \"https://progress.appacademy.io/me\",\n    success: (resp)  => console.log(resp),\n    error: (e) => console.log(e),\n    data: {},\n    contentType: \"application/x-www-form-urlencoded charset=utf-8\"\n  }\n  const params = extend(defaults, optionObject);\n\n  const xhr = new XMLHttpRequest();\n  xhr.open(params.method, params.url);\n\n  xhr.onload = function () {\n    if (xhr.status === 200) { // for status info\n      params.success(xhr.response) //RESPONE\n    } else {\n      params.error(xhr.response)\n    }\n    // console.log(xhr.responseType) //the type of data that was returned\n  }\n  xhr.send(params.data);\n}\n\nwindow.$1 = $1;\nwindow.$1.extend = extend;\nwindow.$1.ajax = ajax;\n\nconst objA = { a: 'a', b: 'a', c: 'a' };\nconst objB = { b: 'b', c: 'b' };\nconst objC = { c: 'c' };\n// $l.extend(objA, objB, objC); //=> {a: 'a', b: 'b', c: 'c'}\n// objA //=> {a: 'a', b: 'b', c: 'c'}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });