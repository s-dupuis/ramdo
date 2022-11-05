import { curry, dissocPath as ramdaDissocPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const dissocPath = curry((keyPath, obj) => ramdaDissocPath(formatPath(keyPath), obj));
