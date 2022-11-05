import { curry, path as ramdaPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

/**
 * Retrieve the value at a given path.
 * (String|String[], any) => any|undefined
 */
export const path = curry((keyPath, obj) => ramdaPath(formatPath(keyPath), obj));
