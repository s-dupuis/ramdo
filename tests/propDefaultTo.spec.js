import { describe, it } from 'mocha';
import { assert } from 'chai';
import { pathIs, propDefaultTo } from '../src';
import {assoc} from "ramda";

describe('propDefaultTo', () => {
  const obj = {
    firstName: 'John'
  };

  it('when prop defined', () => {
    assert.deepEqual(propDefaultTo('firstName', 'Patrick', obj), obj);
  });

  it('when prop not defined', () => {
    assert.deepEqual(propDefaultTo('lastName', 'Doe', obj), assoc('lastName', 'Doe', obj));
  });

  it('curried', () => {
    assert.deepEqual(propDefaultTo('lastName')('Doe')(obj), assoc('lastName', 'Doe', obj));
  });
});
