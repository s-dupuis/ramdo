import { compose, curry, defaultTo, find } from 'ramda';

/**
 * Returns the first element of the list which matches the predicate, or defaultValue if no element matches.
 * (any, Function, any[]) => any
 */
export const findOr = curry(
  (defaultValue, predicate, array) => compose(
    defaultTo(defaultValue),
    find(predicate)
  )(array)
);
