import { curry, pathSatisfies as ramdaPathSatisfies } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const pathSatisfies = curry((predicate, keyPath, obj) => ramdaPathSatisfies(predicate, formatPath(keyPath), obj));
