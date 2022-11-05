import { describe, it } from 'mocha';
import { assert } from 'chai';
import { pathIs } from '../src';

describe('pathIs', () => {
  const name = 'ramdo';
  const obj = {
    subObj1: {
      subObj2: {
        name
      }
    }
  };

  it('path is string with array', () => {
    assert.isTrue(pathIs(['subObj1', 'subObj2', 'name'], String, obj));
  });

  it('path is string with string path', () => {
    assert.isTrue(pathIs('subObj1.subObj2.name', String, obj));
  });

  it('curried', () => {
    assert.isTrue(pathIs('subObj1.subObj2.name')(String)(obj));
  });
});
