import { describe, it } from 'mocha';
import { assert } from 'chai';
import { isNilOrEmpty } from '../src';

describe('isNilOrEmpty', () => {
  it('value undefined', () => {
    assert.isTrue(isNilOrEmpty(undefined));
  });

  it('value null', () => {
    assert.isTrue(isNilOrEmpty(undefined));
  });

  it('empty string', () => {
    assert.isTrue(isNilOrEmpty(''));
  });

  it('empty array', () => {
    assert.isTrue(isNilOrEmpty([]));
  });

  it('value defined', () => {
    assert.isFalse(isNilOrEmpty(0));
  });
});
