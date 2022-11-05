import { curry, assocPath as ramdaAssocPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const assocPath = curry((keyPath, value, obj) => ramdaAssocPath(formatPath(keyPath), value, obj));
