import { describe, it } from 'mocha';
import { assert } from 'chai';
import { path } from '../src';

describe('path', () => {
  const name = 'ramdo';
  const obj = {
    subObj1: {
      subObj2: {
        name
      }
    }
  };

  it('array path', () => {
    assert.equal(path(['subObj1', 'subObj2', 'name'], obj), name);
  });

  it('string path', () => {
    assert.equal(path('subObj1.subObj2.name', obj), name);
  });

  it('curried', () => {
    assert.equal(path('subObj1.subObj2.name')(obj), name);
  });
});
