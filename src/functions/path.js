import { curry, path as ramdaPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const path = curry((keyPath, obj) => ramdaPath(formatPath(keyPath), obj));
