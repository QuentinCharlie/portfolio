// Import npm
// import { expect, should, assert } from 'chai';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import skillsReducer from 'src/reducers/skills';
import data from 'src/data/data';

// Code


// Tests

describe('Test sur le reducer : skills', () => {
  describe('structure', () => {
    it('expected to be a function', () => {
      expect(skillsReducer).to.be.a('function');
    });
    it('expected to return an object', () => {
      expect(skillsReducer()).to.be.an('object');
    });
    it('expected to return the correct data', () => {
      expect(skillsReducer()).to.eql(data.skills);
    });
  });
});
