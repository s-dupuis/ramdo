import { compose, curry, map, path, uniq } from 'ramda';
import { formatPath } from './helpers/formatPath';

/**
 * Returns a new list by plucking the same named path off all objects in the list supplied.
 * pluckPath will work on any functor in addition to arrays, as it is equivalent to R.map(R.path(path), f).
 *
 * (String|String[], object[]) => any[]
 */
export const pluckPath = curry((keyPath, array) => compose(
  uniq,
  map(
    path(formatPath(keyPath))
  )
)(array));
