import { curry, is, pathSatisfies } from 'ramda';
import { formatPath } from './helpers/formatPath';

/**
 * See if the given path of an object (i.e. val) is an instance of the supplied constructor. This function will check up the inheritance chain, if any.
 * If val was created using Object.create, R.pathIs(path, Object, val) === true.
 * (String|String[], Type, object) => Boolean
 */
export const pathIs = curry(
  (keyPath, keyType, obj) => pathSatisfies(
    is(keyType),
    formatPath(keyPath),
    obj
  )
);
