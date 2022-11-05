import { curry, pathOr as ramdaPathOr } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const pathOr = curry((defaultValue, keyPath, obj) => ramdaPathOr(defaultValue, formatPath(keyPath), obj));
