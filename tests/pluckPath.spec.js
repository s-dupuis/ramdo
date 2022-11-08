import { describe, it } from 'mocha';
import { assert } from 'chai';
import { pluckPath } from '../src';
import { equals, filter, includes } from 'ramda';

describe('pluckPath', () => {
  const userName1 = 'Peter';
  const userName2 = 'John';
  const userName3 = 'Mark';

  const array = [
    { user: { name: userName1 } },
    { user: { name: userName2 } },
    { user: { name: userName2 } },
    { user: { name: userName3 } }
  ];

  it('array path', () => {
    const userNames = pluckPath(['user', 'name'], array);

    assert.equal(userNames.length, 3);
    assert.isTrue(includes(userName1, userNames));
    assert.isTrue(includes(userName2, userNames));
    assert.isTrue(includes(userName3, userNames));
  });

  it('string path', () => {
    const userNames = pluckPath('user.name', array);

    assert.equal(userNames.length, 3);
    assert.isTrue(includes(userName1, userNames));
    assert.isTrue(includes(userName2, userNames));
    assert.isTrue(includes(userName3, userNames));
  });

  it('values are unique', () => {
    const userNames = pluckPath('user.name', array);

    assert.equal(userNames.length, 3);

    const foundUserNames = filter(equals(userName2), userNames);
    assert.equal(foundUserNames.length, 1);
  });

  it('curried', () => {
    const userNames = pluckPath('user.name')(array);

    assert.equal(userNames.length, 3);
    assert.isTrue(includes(userName1, userNames));
    assert.isTrue(includes(userName2, userNames));
    assert.isTrue(includes(userName3, userNames));
  });
});
