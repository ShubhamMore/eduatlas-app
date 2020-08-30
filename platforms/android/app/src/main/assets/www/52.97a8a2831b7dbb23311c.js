(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm-es5/index-44bf8136.js");
/* harmony import */ var _ionic_global_837be8f3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-837be8f3.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-837be8f3.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js");



var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Text.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_837be8f3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return Text;
}());
Text.style = textCss;



/***/ })

}]);