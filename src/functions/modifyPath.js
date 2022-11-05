import { curry, modifyPath as ramdaModifyPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const modifyPath = curry((keyPath, fn, obj) => ramdaModifyPath(formatPath(keyPath), fn, obj));
