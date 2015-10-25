import Friend from './friend';
import Life from './life';
import Totoro from './totoro';

(function() {
  'use strict';

  describe('About Creating Characters (totoro, life, friend)', function() {

    beforeEach(function() {
      window.x = new Friend();
      window.y = new Life();
      window.z = new Totoro();
    });

    describe('creating a friend (good guy)', function() {
      it('should create an instance of Friend', function() {
        expect(x instanceof Friend).to.equal(true);
      });
    });

    describe('creating life problems (bad guy)', function() {
      it('should create an instance of Life', function() {
        expect(y instanceof Life).to.equal(true);
      });
    });

    describe('creating Totoro (main character)', function() {
      it('should create an instance of Totoro', function() {
        expect(z instanceof Totoro).to.equal(true);
      });
    });

    describe('totoro health', function() {
      it('should have full health upon creation', function() {
        expect(z.health).to.equal(100);
      });
    });

    describe('life(enemy) response options', function() {
      it('should create list of options when called', function() {
        expect(y.response).to.not.throw(Error);
      });
    });

    describe('life should have prototype of options', function() {
      it('should have prototype options', function() {
        expect(Life.prototype.meanOptions).to.be.an('array');
      });
    });

    describe('friend response options', function() {
      it('should create list of options when called', function() {
        expect(x.response).to.not.throw(Error);
      });
    });

    describe('friend should have prototype of options', function() {
      it('should have prototype options', function() {
        expect(Friend.prototype.battleOptions).to.be.an('array');
      });
    });
  });

}());