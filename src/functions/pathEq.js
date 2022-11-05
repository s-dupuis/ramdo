import { curry, pathEq as ramdaPathEq } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const pathEq = curry((keyPath, value, obj) => ramdaPathEq(formatPath(keyPath), value, obj));
