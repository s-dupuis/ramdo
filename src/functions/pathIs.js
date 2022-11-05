import { curry, is, pathSatisfies } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const pathIs = curry(
  (keyPath, keyType, obj) => pathSatisfies(
    is(keyType),
    formatPath(keyPath),
    obj
  )
);
