// Import npm
// import { expect, should, assert } from 'chai';
import { expect } from 'chai';
import { changeInputValue } from 'src/actions/skills';

// Code


// Tests

describe('Test sur action : skills', () => {
  describe('structure de changeInputValue', () => {
    it('expected to be a function', () => {
      expect(changeInputValue).to.be.a('function');
    });
    it('expected to return an object', () => {
      expect(changeInputValue()).to.be.a('object');
    });
    it('expected to have a property type', () => {
      expect(changeInputValue()).to.have.a.property('type');
    });
    it('expected to have a property inputValue and to return it with the same key', () => {
      expect(changeInputValue('test')).to.have.a.property('inputValue').that.equal('test');
    });
  });
});
