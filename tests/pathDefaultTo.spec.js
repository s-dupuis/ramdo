import { describe, it } from 'mocha';
import { assert } from 'chai';
import { pathDefaultTo } from '../src';
import { assocPath } from 'ramda';

describe('pathDefaultTo', () => {
  const obj = {
    user: {
      firstName: 'John'
    }
  };

  it('when path defined', () => {
    assert.deepEqual(pathDefaultTo(['user', 'firstName'], 'Patrick', obj), obj);
  });

  it('when path not defined', () => {
    assert.deepEqual(pathDefaultTo(['user', 'lastName'], 'Doe', obj), assocPath(['user', 'lastName'], 'Doe', obj));
  });

  it('curried', () => {
    assert.deepEqual(pathDefaultTo(['user', 'lastName'])('Doe')(obj), assocPath(['user', 'lastName'], 'Doe', obj));
  });
});
