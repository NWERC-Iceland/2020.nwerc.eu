webpackHotUpdate("static/development/pages/registration.js",{

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

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




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

var _iterator = _createForOfIteratorHelper(universities.keys()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _university = _step.value;
    universities.get(_university).sort();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var universityKeys = Array.from(universities.keys());
universityKeys.sort();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 1
    }
  }, "Registration"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 1
    }
  }, "The registration for NWERC 2020 closed on ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 1
    }
  }, "March 16th, 2021"), ". The", "\n", "following teams are registered.", "\n"), universityKeys.map(function (university) {
    return [__jsx("h3", {
      key: university,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 1
      }
    }, university), universities.get(university).map(function (team) {
      return __jsx("h5", {
        key: team,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 1
        }
      }, team);
    })];
  }));
});

/***/ })

})
//# sourceMappingURL=registration.js.b480cf947232e55f54cf.hot-update.js.map