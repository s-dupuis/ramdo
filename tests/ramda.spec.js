import { describe, it } from 'mocha';
import { assert } from 'chai';
import { isNil } from '../src';

describe('Ramda functions are available', () => {
  it('isNil', () => {
    assert.isTrue(isNil(undefined));
  });
});
