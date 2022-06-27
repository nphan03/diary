(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/dangermodal.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/dangermodal.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dangerModal_background {\n  background-color: var(--color-white);\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n\n  position: absolute; /*Can also be `fixed`*/\n  margin: auto;\n  left: 0;\n  top: 0;\n\n  width: 100vw;\n  height: 100vh;\n  z-index: 0;\n\n}\n.dangerModal {\n  max-width: 35rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 35px;\n  \n  position: absolute; /*Can also be `fixed`*/\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  background: var(--color-white);\n  border: 2px solid var(--color-button-bg);\n  border-radius: var(--border-radius);\n\n  font-size: 20px;\n  z-index: 3;\n  filter: blur(0px);\n    -webkit-filter: blur(0px);\n  opacity: 0.4\n}\n\n.dangerModal_button_yes {\n  background: var(--color-danger);\n  color: var(--color-white);\n  border-color: var(--color-danger) \n}\n\n.dangerModal_button_yes:hover {\n  color: red;\n  border-color: var(--color-danger) \n}\n.dangerModal_button {\n  text-align: center;\n}\n\n.dangerModal_button .btn {\n  margin: 25px;\n}\n\n/* ========================== MEDIA QUERIES (MEDIUM DEVICES) ==================*/\n@media screen and (max-width: 992px) {\n  .dangerModal {\n    padding: 25px;  \n  }\n\n  .dangerModal_button .btn {\n    margin: 15px;\n  }\n}\n\n/* ========================== MEDIA QUERIES (SMALL DEVICES) ==================*/\n@media screen and (max-width: 576px) {\n  .dangerModal {\n    padding: 15px;  \n  }\n\n  .dangerModal_button .btn {\n    margin: 10px;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/date.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/date.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".date-navigation {\n  display: flex;\n  grid-gap: 20px;\n  gap: 20px;\n  justify-content: center;\n\n  background: var(--color-bg);\n\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: 10px;\n  font-weight: bold;\n}\n\n\n.date-navigation__month, .date-navigation__year {\n  cursor: n-resize;\n}\n\n.date-navigation__month:hover, .date-navigation__year:hover {\n  transform: scale(1.2);\n  transition: var(--transition)\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/diarycard.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/diarycard.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".diary-card {\n  width: 21%;\n  height: 12rem;\n  margin: 2%;\n  float: left;\n\n  background: var(--color-card-bg);\n  border-radius: var(--border-radius);\n\n  display: grid;\n  grid-template-columns: auto min-content;\n  grid-template-rows: auto min-content;\n\n  grid-template-areas: \n    \"text text\"\n    \"date buttons\";\n\n  padding: 5px;\n  cursor: pointer;\n}\n\n.diary-card__text {\n  grid-area: text;\n  padding-top: 5px;\n}\n\n.diary-card__text textarea {\n  resize: none;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n}\n\n.diary-card__date {\n  grid-area: date;\n  align-self: end;\n}\n\n.diary-card__btn {\n  grid-area: buttons;\n  flex-direction: column;\n  grid-gap: 5px;\n  gap: 5px;\n\n}\n\n.diary-card__btn__minimize, .diary-card__btn__remove {\n  border-radius: 100%;\n  padding: 0;\n  font-size: 10pt;\n  width: 18px;\n  height: 18px;\n}\n\n\n.diary-card__btn__remove {\n  background-color: var(--color-danger);\n  color: var(--color-danger);\n}\n\n.diary-card__btn__remove:hover{\n  background: var(--color-danger);\n  border: 3px solid var(--color-danger);\n  color: var(--color-text);\n}\n\n\n.diary-card__btn__minimize {\n  color: var(--color-button-bg);\n}\n\n.diary-card__btn__minimize:hover{\n  background: var(--color-button-bg);\n  border: 3px solid var(--color-button-bg);\n  color: var(--color-text);\n}\n\n\n/* ========================== MEDIA QUERIES (MEDIUM DEVICES) ==================*/\n@media screen and (max-width: 992px) {\n  .diary-card {\n    width: 46%;\n  }\n}\n\n/* ========================== MEDIA QUERIES (SMALL DEVICES) ==================*/\n@media screen and (max-width: 576px) {\n  .diary-card {\n    width: 96%;\n  }\n}\n\n.clearfix:after { \n  content: \".\"; \n  visibility: hidden; \n  display: block; \n  height: 0; \n  clear: both;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/login.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/login.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  max-width: 20rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  \n  position: absolute; /*Can also be `fixed`*/\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  display: grid;\n  grid-template-rows: max-content max-content;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.login-inputs {\n  background: var(--color-card-bg);\n\n  padding: 3rem var(--padding-size);\n  max-width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  grid-gap: 15px;\n  gap: 15px;\n\n  border-radius: var(--border-radius);\n}\n\n.login-inputs__label {\n  display: block;\n  font-size: 18pt;\n}\n\n.login-inputs__input {\n  height: 40px;\n  font-size: 14pt;\n  padding: var(--padding-size);\n}\n\n.login-btn {\n  display: flex;\n  justify-content: space-between;\n}\n\n.login-message {\n  height: 50px;\n  color: var(--color-danger)\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/style.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap);", ""]);
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/login.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./taskbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/taskbar.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./diarycard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/diarycard.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./date.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/date.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./dangermodal.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/dangermodal.css"), "");

// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; \n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\n:root {\n  --color-bg: #fffcf7;\n  --color-card-bg: #e4f0d0;\n  --color-button-bg: #9ac98f; \n  --color-text: #38383a;\n  --color-white: #fff;\n  --color-danger: red;\n\n  --transition: all 400ms ease;\n\n  --container-width-lg: 75%;\n  --container-width-md: 86%;\n  --container-width-sm: 90%;\n\n  --padding-size: 1rem;\n  --border-radius: 0.4rem;\n}\n\nbody {\n  background: var(--color-bg);\n  font-family: 'Delius Swash Caps', cursive;\n  color: var(--color-text);\n  line-height: 1.7;\n  width: 100vw;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n/********** GENERAL STYLE **************/\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-weight: 500;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\nh3 {\n    font-size: 1.5rem;\n}\n\na {\n    color: var(--color-text);\n    transition: var(--transition);\n}\n\n.btn {\n  width: max-content;\n  display: inline-block;\n  padding: 0.75rem 1.2rem;\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  background-color: var(--color-button-bg);\n  transition: var(--transition);\n  border: 3px solid transparent;\n\n  font-weight: bold;\n  font-family: inherit;\n  font-size: 15pt;\n}\n\n.btn:hover {\n  background: var(--color-white);\n  border: 3px solid var(--color-button-bg);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/taskbar.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/taskbar.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-link, .add-diary-btn {\n  font-size: 18pt;\n  border-radius:100%;\n  margin-left: 10px;\n}\n\n.add-diary-btn {\n  padding-left: 22.5px;\n  padding-right: 22.5px;\n\n}\n\n.taskbar-btn {\n  position: fixed;\n  bottom:10px;\n  right: 10px;\n\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n\n  z-index: 2;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: UserContext, DiaryContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryContext", function() { return DiaryContext; });
/* harmony import */ var _home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Homepage */ "./src/components/Homepage.js");



var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/App.js";





var UserContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();
var DiaryContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      authMessage = _useState2[0],
      setAuthMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      userName = _useState4[0],
      setUserName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      passWord = _useState6[0],
      setPassWord = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState8 = Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      diaryList = _useState8[0],
      setDiaryList = _useState8[1];

  var logIn = function logIn() {
    setAuthMessage('');
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3000/login', {
      username: userName,
      password: passWord
    }).then(function (serverResponse) {
      if (serverResponse.data === 'Authentication Fail') throw serverResponse.data;
      setDiaryList(serverResponse.data);
    }).catch(function (err) {
      setPassWord('');
      setAuthMessage(err);
    });
  };

  var signUp = function signUp() {
    setAuthMessage('');
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3000/signup', {
      username: userName,
      password: passWord
    }).then(function (serverResponse) {
      if (serverResponse.data === 'User existed') throw serverResponse.data;
      setDiaryList(serverResponse.data);
    }).catch(function (err) {
      setPassWord('');
      setAuthMessage(err);
    });
  };

  var modifyText = function modifyText(diary_id, diary) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:3000/".concat(userName), {
      diary_id: diary_id,
      newText: diary.diary_text
    }).then(function (serverResponse) {
      if (serverResponse.data !== 'Updated diary') throw serverResponse.data;else {
        var newDiaryList = Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(diaryList);

        var index = newDiaryList.findIndex(function (d) {
          return d.diary_id === diary_id;
        });
        newDiaryList[index] = diary;
        setDiaryList(newDiaryList);
      }
    }).catch(function (err) {
      console.log(err);
    });
  };

  var handleDeleteDiary = function handleDeleteDiary(delete_id) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete("http://localhost:3000/".concat(userName), {
      data: {
        id: delete_id
      }
    }).then(function (serverResponse) {
      if (serverResponse.data !== 'Updated diary list') throw serverResponse.data;else {
        setDiaryList(diaryList.filter(function (d) {
          return d.diary_id !== delete_id;
        }));
      }
    }).catch(function (err) {
      console.log(err);
    });
  };

  var addDiary = function addDiary() {
    var diary = {
      diary_username: userName,
      diary_text: '',
      diary_date: new Date().toLocaleDateString("en-US", {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://localhost:3000/".concat(diary.diary_username), diary).then(function (serverResponse) {
      if (serverResponse.status !== 500) setDiaryList([serverResponse.data.rows[0]].concat(Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(diaryList)));else throw serverResponse.data;
    }).catch(function (err) {
      console.log(err);
    });
  };

  var userContextValue = {
    userName: userName,
    passWord: passWord,
    setUserName: setUserName,
    setPassWord: setPassWord
  };
  var diaryContextValue = {
    diaryList: diaryList,
    addDiary: addDiary,
    modifyText: modifyText,
    handleDeleteDiary: handleDeleteDiary
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserContext.Provider, {
    value: userContextValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, !diaryList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logIn: logIn,
    authMessage: authMessage,
    signUp: signUp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DiaryContext.Provider, {
    value: diaryContextValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Homepage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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

/***/ }),

/***/ "./src/components/Date.js":
/*!********************************!*\
  !*** ./src/components/Date.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/Date.js";



var Date = function Date() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date-navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date-navigation__month",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "June"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date-navigation__divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date-navigation__year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "2022"));
};

/* harmony default export */ __webpack_exports__["default"] = (Date);

/***/ }),

/***/ "./src/components/Diaries.js":
/*!***********************************!*\
  !*** ./src/components/Diaries.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
/* harmony import */ var _DiaryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiaryCard */ "./src/components/DiaryCard.js");
var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/Diaries.js";





var Diaries = function Diaries() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_1__["DiaryContext"]),
      diaryList = _useContext.diaryList,
      modifyText = _useContext.modifyText;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "diary-list clearfix",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, diaryList.map(function (diary) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: diary.diary_id,
      className: "diary-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DiaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      diary: diary,
      modifyText: modifyText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Diaries);

/***/ }),

/***/ "./src/components/DiaryCard.js":
/*!*************************************!*\
  !*** ./src/components/DiaryCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DangerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DangerModal */ "./src/components/DangerModal.js");



var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/DiaryCard.js";




var DiaryCard = function DiaryCard(_ref) {
  var diary = _ref.diary,
      modifyText = _ref.modifyText;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var date = new Date("".concat(diary.diary_date)).toDateString();
  var formateddate = date.slice(0, 3) + ', ' + date.slice(4);

  var handleTextChange = function handleTextChange(text) {
    var change = {
      diary_text: text
    };
    modifyText(diary.diary_id, Object(_home_alice_repos_diary_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, diary, change));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "diary-card__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
    value: diary.diary_text,
    onChange: function onChange(e) {
      return handleTextChange(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "diary-card__date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, formateddate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "diary-card__btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn diary-card__btn__remove",
    onClick: function onClick() {
      return setIsOpen(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\u2715"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn diary-card__btn__minimize",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "\u2212")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DangerModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: isOpen,
    setIsOpen: setIsOpen,
    date: formateddate,
    id: diary.diary_id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DiaryCard);

/***/ }),

/***/ "./src/components/Homepage.js":
/*!************************************!*\
  !*** ./src/components/Homepage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Diaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diaries */ "./src/components/Diaries.js");
/* harmony import */ var _Taskbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Taskbar */ "./src/components/Taskbar.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "./src/components/Date.js");
var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/Homepage.js";






var Homepage = function Homepage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Diaries__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Taskbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Date__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/Login.js";




var Login = function Login(_ref) {
  var logIn = _ref.logIn,
      authMessage = _ref.authMessage,
      signUp = _ref.signUp;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_1__["UserContext"]),
      userName = _useContext.userName,
      passWord = _useContext.passWord,
      setUserName = _useContext.setUserName,
      setPassWord = _useContext.setPassWord;

  var handleUserNameInputChange = function handleUserNameInputChange(newUserName) {
    setUserName(newUserName);
  };

  var handlePassWordInputChange = function handlePassWordInputChange(newPassWord) {
    setPassWord(newPassWord);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-inputs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "username",
    className: "login-inputs__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    className: "login-inputs__input",
    required: true,
    value: userName,
    onChange: function onChange(e) {
      return handleUserNameInputChange(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "password",
    className: "login-inputs__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    className: "login-inputs__input",
    required: true,
    value: passWord,
    onChange: function onChange(e) {
      return handlePassWordInputChange(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, authMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn--primary",
    onClick: function onClick() {
      return logIn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn--primary",
    onClick: function onClick() {
      return signUp();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Sign Up")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/Taskbar.js":
/*!***********************************!*\
  !*** ./src/components/Taskbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
var _this = undefined,
    _jsxFileName = "/home/alice/repos/diary/frontend/src/components/Taskbar.js";




var Taskbar = function Taskbar() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_1__["UserContext"]),
      userName = _useContext.userName;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_1__["DiaryContext"]),
      addDiary = _useContext2.addDiary;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "taskbar-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "add-diary-btn btn btn-primary",
    onClick: function onClick() {
      return addDiary();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "user-link btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, userName.charAt(0).toUpperCase()));
};

/* harmony default export */ __webpack_exports__["default"] = (Taskbar);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
var _jsxFileName = "/home/alice/repos/diary/frontend/src/index.js";




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2___default.a.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/alice/repos/diary/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/alice/repos/diary/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map