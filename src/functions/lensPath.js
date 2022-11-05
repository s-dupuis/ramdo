import { lensPath as ramdaLensPath } from 'ramda';
import { formatPath } from './helpers/formatPath';

export const lensPath = keyPath => ramdaLensPath(formatPath(keyPath));
