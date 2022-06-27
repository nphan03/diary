webpackHotUpdate("main",{

/***/ "./src/components/DangerModal.js":
/*!***************************************!*\
  !*** ./src/components/DangerModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/DangerModal.js";




var DangerModal = function DangerModal(_ref) {
  var open = _ref.open,
      setIsOpen = _ref.setIsOpen,
      date = _ref.date,
      id = _ref.id;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_1__["DiaryContext"]),
      handleDeleteDiary = _useContext.handleDeleteDiary;

  if (!open) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dangerModal_background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 14
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dangerModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "This action can't be reversed. Are you sure you want to delete your diary on ", date, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dangerModal_button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn dangerModal_button_no",
    onClick: function onClick() {
      return setIsOpen(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "NO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn dangerModal_button_yes",
    onClick: function onClick() {
      handleDeleteDiary(id);
      setIsOpen(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "YES"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DangerModal);

/***/ })

})
//# sourceMappingURL=main.99cefaf852d9cac7f64b.hot-update.js.map