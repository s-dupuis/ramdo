import { describe, it } from 'mocha';
import { assert } from 'chai';
import { findOr } from '../src';
import { propEq } from 'ramda';

describe('findOr', () => {
  const item1 = { name: 'ramdo1' };
  const item2 = { name: 'ramdo2' };
  const item3 = { name: 'ramdo3' };

  const items = [
    item1,
    item2
  ];

  it('item found', () => {
    assert.equal(findOr(propEq('name', 'ramdo2'), item3, items), item2);
  });

  it('item not found', () => {
    assert.equal(findOr(propEq('name', 'ramdo4'), item3, items), item3);
  });

  it('curried', () => {
    assert.equal(findOr(propEq('name', 'ramdo4'))(item3)(items), item3);
  });
});
