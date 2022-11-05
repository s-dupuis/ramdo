import { compose, curry, defaultTo, find } from 'ramda';

export const findOr = curry(
  (predicate, defaultValue, array) => compose(
    defaultTo(defaultValue),
    find(predicate)
  )(array)
);
