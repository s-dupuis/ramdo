import { curry, hasPath as ramdaHasPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const hasPath = curry((keyPath, obj) => ramdaHasPath(formatPath(keyPath), obj));
