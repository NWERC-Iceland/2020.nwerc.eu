webpackHotUpdate("static/development/pages/registration.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/registration.js":
/*!*******************************!*\
  !*** ./pages/registration.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/bjarki/nwerc2020/nwerc.is/Website/pages/registration.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var teams = [["Hookup Table", "Lund University"], ["[€_€] [$_$] [¥_¥]", "Aalto University"], ["Amazon is on fire", "Vrije Universiteit"], ["fredag", "KTH - Royal Institute of Technology"], ["ezpc", "Lund University"], ["Vilnius Tech 3", "Vilnius Gediminas Technical University"], ["Term 42", "University of Edinburgh"], ["TumLE", "Technische Universität München"], ["Radoslav Dimitrov has a tree (unless", "University of Oxford"], ["SP3D", "University of Tartu"], ["chmod_777", "RWTH Aachen University"], ["Hexaflexagons", "Hasso Plattner Institute"], ["Juhan", "University of Tartu"], [" '); drop table teams; -- ", "University of Warwick"], ["PowerCouple U Fløe", "Aarhus University"], ["Fully Activated Uranium", "Friedrich-Alexander-University Erlangen-Nuremberg"], ["Fredriks minions", "KTH - Royal Institute of Technology"], ["[\"hip\",\"hip\"]", "University of Nottingham"], ["segmentation truth", "University of Edinburgh"], ["SinCity", "University of Helsinki"], ["Polish Pigeons", "University of Cambridge"], [" ( ◉ ⌣(◔ ⌣ ◔)⌣ ☼) Migos", "Delft University of Technology"], ["Segfault go BRRRR", "Delft University of Technology"], ["MegaFAUna", "Friedrich-Alexander-University Erlangen-Nuremberg"], ["Team Davit en Geerd", "Eindhoven University of Technology"], ["RisK IT!", "Karlsruhe Institute of Technology (KIT)"], ["asdf", "Linköping University"], ["Butter Bois Reunited", "University of Warwick"], ["BOIs", "Norwegian University of Science and Technology"], ["KTU#1", "Kaunas University of Technology"], ["fULMinant", "Universität Ulm"], ["Perry the C+platy+", "Radboud University"], ["Good Treap", "University of Manchester"], ["Nonmeasurable", "Imperial College London"], ["PIece of cake", "Eindhoven University of Technology"], ["Quantum Pigeons", "Vilnius University"], ["Vilnius Tech 2", "Vilnius Gediminas Technical University"], ["Race Condition", "University of Nottingham"], ["5€engineers", "Vilnius University"], ["Bakstrætisbræðurnir", "University of Iceland"], ["insert kebab", "University of Cambridge"], ["scrybit", "Universität Rostock"], ["Lord VolTUMort", "Technische Universität München"], ["The Algoteers", "Radboud University"], ["Noobness Limit Exceeded", "Imperial College London"], ["Vilnius Tech 1", "Vilnius Gediminas Technical University"], ["DuckGiraffe!", "Utrecht University"], ["The Turbofish", "Radboud University"], ["VeggieChicken", "University of Nottingham"], ["Dogecoin Miners", "Norwegian University of Science and Technology"], ["Tream Deam", "Tallinn University of Technology"], ["ICE", "Universiteit van Amsterdam"], ["KTU#3", "Kaunas University of Technology"], ["Stroustrupperne", "Technical University of Denmark"], ["Le Cercle Des Éplucheurs De Code", "Université Catholique de Louvain"], ["Ballondyrene", "University of Copenhagen"], ["Run-CMD", "University of Lincoln"], ["true ? true : false", "Imperial College London"], ["Death peanulty", "Aalborg University"], ["Hack Attack", "Universiteit van Amsterdam"], ["Les dés codeurs", "Université Catholique de Louvain"], ["SnackUnderflow", "Utrecht University"], ["SebbiASK56", "Lund University"], ["$ sudo solve -A problems", "Leiden University"], ["KTU#2", "Kaunas University of Technology"], ["Agonaudid", "Tallinn University of Technology"], ["<(⊗v⊗)>", "Saarland University"], ["coutout<<floor(e)uler;", "University of Copenhagen"], ["Out of Touch", "Delft University of Technology"], ["No hope", "University of Southampton"], ["<(⊕v⊕)>", "Saarland University"], ["insert_vaLUE", "Universität zu Lübeck"], ["Syntax Terror", "Leiden University"], ["Algorithms Beat Lockdown", "Université Catholique de Louvain"], ["To Python, or not to Python, that is the question", "Universität Rostock"], ["while (false) break;", "Utrecht University"], ["Bodleian Heap", "University of Oxford"], ["Rindellerne", "Technical University of Denmark"], ["FAUtastic(at)", "Friedrich-Alexander-University Erlangen-Nuremberg"], ["Deep Freezing Notatoes", "Reykjavik University "], ["Red Pi", "Eindhoven University of Technology"], ["Trinity Tourists", "Trinity College Dublin"], ["German Center for Plattnerpus Care", "Hasso Plattner Institute"], ["Flaming Tomatoes", "Universität zu Lübeck"], ["A* is born", "IT University of Copenhagen"], ["CEV", "Fontys University of Applied Science"], ["KitKatCode", "Karlsruhe Institute of Technology (KIT)"], ["Big O Chungus", "University of Southampton"], ["FFT", "Universität zu Lübeck"], ["Los Patrons", "University of Oxford"], ["UMONS #3", "Université de Mons"], ["Snekmentation Fault", "Leiden University"], ["Shockers", "Vrije Universiteit"], ["CyanForces", "KTH - Royal Institute of Technology"], ["Stack Underflow", "University College Cork"], ["Boys in the bath", "University of Bath"], ["Dolores TUMbridge", "Technische Universität München"], ["Hope It Passes", "Vilnius University"], ["Let's Party: Home Alone", "Karlsruhe Institute of Technology (KIT)"], ["Old Boys Squad", "University of Manchester"], ["The floor is made of Java", "University of Copenhagen"], ["BrainGames", "Tallinn University of Technology"], ["The Hyperspheres", "Vrije Universiteit"], ["Eulerianen", "Universiteit van Amsterdam"], ["Hassos Portable Informatiker", "Hasso Plattner Institute"], ["RETURN PRINT", "Université de Mons"], ["C##", "University of Warwick"], ["The C-Team", "Aarhus University"], ["Baltoslav", "University of Manchester"], ["remotED", "University of Edinburgh"], ["Bath Half-brained", "University of Bath"], ["Team 47 again again", "University of Glasgow"], ["Slackoverflow", "IT University of Copenhagen"], ["alpha-mega-death squad", "Brunel University London"], ["CAU: High Steaks", "Christian-Albrechts-Universitaet zu Kiel"], ["PC's are finite automata", "Aarhus University"], ["CPUMONS", "Université de Mons"], ["We are just here for the balloons", "IT University of Copenhagen"], ["balloonatics", "University of Cambridge"], ["biCAUsal", "Christian-Albrechts-Universitaet zu Kiel"]];
var universities = new Map();

for (var _i = 0, _teams = teams; _i < _teams.length; _i++) {
  var _teams$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_teams[_i], 2),
      team = _teams$_i[0],
      university = _teams$_i[1];

  if (!universities.has(university)) {
    universities.set(university, []);
  }

  universities.get(university).push(team);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 1
    }
  }, "Registration"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 1
    }
  }, "The registration for NWERC 2020 closed on ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 1
    }
  }, "March 16th, 2021"), ". The", "\n", "following teams are registered.", "\n"), teams.map(function (team) {
    return __jsx("h2", {
      key: team,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 1
      }
    }, "test");
  }));
});

/***/ })

})
//# sourceMappingURL=registration.js.6ae66d679b180ddeef5a.hot-update.js.map