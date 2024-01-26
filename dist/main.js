/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/utilities/listRunningDesktopApps.ts":
/*!******************************************************!*\
  !*** ./src/main/utilities/listRunningDesktopApps.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupProcessListeners: () => (/* binding */ setupProcessListeners)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ps_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ps-node */ "ps-node");
/* harmony import */ var ps_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ps_node__WEBPACK_IMPORTED_MODULE_1__);


var setupProcessListeners = function () {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on('request-running-apps', function (event) {
        ps_node__WEBPACK_IMPORTED_MODULE_1___default().lookup({}, function (error, resultList) {
            if (error) {
                console.log('Error from setupProcessListeners function: ', error);
            }
            event.reply('response-running-apps', resultList);
        });
    });
};


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "ps-node":
/*!**************************!*\
  !*** external "ps-node" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ps-node");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_listRunningDesktopApps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/listRunningDesktopApps */ "./src/main/utilities/listRunningDesktopApps.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var isDev = "development" !== 'production';
var isMac = process.platform === 'darwin';
var mainWindow;
var aboutWindow;
var createMainWindow = function () {
    mainWindow = new electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow({
        title: 'second-electron-app',
        width: isDev ? 1000 : 500,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: node_path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '../dist/preload.ts'),
        },
    });
    // open devTools if we are in dev environment
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    // load the index.html for the app
    mainWindow.loadFile(node_path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '/index.html'));
};
// Create the About Window
function createAboutWindow() {
    aboutWindow = new electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow({
        title: 'About Image Resizer',
        width: 300,
        height: 300,
    });
    aboutWindow.loadFile(node_path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, './renderer/about.html'));
}
electron__WEBPACK_IMPORTED_MODULE_1__.app.whenReady().then(function () {
    createMainWindow();
    var runningApps = (0,_utilities_listRunningDesktopApps__WEBPACK_IMPORTED_MODULE_2__.setupProcessListeners)();
    console.log(runningApps);
    // implement menu
    var mainMenu = electron__WEBPACK_IMPORTED_MODULE_1__.Menu.buildFromTemplate(menu);
    electron__WEBPACK_IMPORTED_MODULE_1__.Menu.setApplicationMenu(mainMenu);
    // remove mainWindow from memory on close
    mainWindow.on('closed', function () { return (mainWindow = null); });
    electron__WEBPACK_IMPORTED_MODULE_1__.app.on('activate', function () {
        if (electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
    mainWindow.on('closed', function () { return (mainWindow = null); });
});
// Menu template
var menu = __spreadArray(__spreadArray(__spreadArray([], (isMac
    ? [
        {
            label: electron__WEBPACK_IMPORTED_MODULE_1__.app.name,
            submenu: [
                {
                    label: 'About',
                    click: createAboutWindow,
                },
            ],
        },
    ]
    : []), true), [
    {
        role: 'fileMenu',
    }
], false), (!isMac
    ? [
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About',
                    click: createAboutWindow,
                },
            ],
        },
    ]
    : []), true);
electron__WEBPACK_IMPORTED_MODULE_1__.app.on('window-all-closed', function () {
    if (!isMac) {
        electron__WEBPACK_IMPORTED_MODULE_1__.app.quit();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map