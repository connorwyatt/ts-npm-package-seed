import {expect} from 'chai';
import 'mocha';
import {VERSION} from '../../src/publicApi';

describe('VERSION', () => {
  it('should be correct', () => {
    expect(VERSION).to.equal('0.0.0', 'Incorrect version number.');
  });
});
