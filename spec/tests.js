(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// This is the 'good guy'

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Friend = function Friend() {

  this.battleOptions = function (option, power) {
    return battleOptions;
  };
};

var leaf = { opt: 'leaf', pow: 20 };
var cat = { opt: 'cat bus', pow: 20 };
var forest = { opt: 'forest', pow: 20 };
var food = { opt: 'share food', pow: 10 };
var friend = { opt: 'be friendly', pow: 30 };
var perch = { opt: 'find perch', pow: 20 };

Friend.prototype.battleOptions = [leaf, cat, forest, food, friend, perch];

exports['default'] = Friend;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
// This is the 'bad guy'

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Life = function Life() {};

exports["default"] = Life;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _friend = require('./friend');

var _friend2 = _interopRequireDefault(_friend);

var _life = require('./life');

var _life2 = _interopRequireDefault(_life);

var _totoro = require('./totoro');

var _totoro2 = _interopRequireDefault(_totoro);

(function () {
  'use strict';

  describe('About Creating Characters (totoro, life, friend)', function () {

    beforeEach(function () {
      window.x = new _friend2['default']();
      window.y = new _life2['default']();
      window.z = new _totoro2['default']();
    });

    describe('creating a friend (good guy)', function () {
      it('should create an instance of Friend', function () {
        expect(x instanceof _friend2['default']).to.equal(true);
      });
    });

    describe('creating life problems (bad guy)', function () {
      it('should create an instance of Life', function () {
        expect(y instanceof _life2['default']).to.equal(true);
      });
    });

    describe('creating Totoro (main character)', function () {
      it('should create an instance of Totoro', function () {
        expect(z instanceof _totoro2['default']).to.equal(true);
      });
    });

    describe('totoro health', function () {
      it('should have full health upon creation', function () {
        expect(z.health).to.equal(100);
      });
    });

    // describe('totoro taking damage', function() {
    //   it('should lower the score, after getting hit', function() {
    //     x.hit();
    //     expect(x.health).to.be.below(100);
    //   });
    // });
  });
})();

},{"./friend":1,"./life":2,"./totoro":4}],4:[function(require,module,exports){
// Totoro is main character of game

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Totoro = function Totoro() {

  this.health = 100;
  this.hit = hit;
  this.loved = loved;
};

exports["default"] = Totoro;
module.exports = exports["default"];

},{}]},{},[3])


//# sourceMappingURL=tests.js.map
