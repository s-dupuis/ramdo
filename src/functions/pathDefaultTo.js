import { assocPath, curry, pathSatisfies, when } from 'ramda';
import { formatPath } from './helpers/formatPath';
import { isNilOrEmpty } from './isNilOrEmpty';

/**
 * When the given path is null, undefined or empty :
 * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path.
 * Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 * Otherwise, the source object is returned.
 * (String|String[], any, object) => object
 */
export const pathDefaultTo = curry(
  (path, defaultValue, obj) => {
    const formattedPath = formatPath(path);

    return when(
      pathSatisfies(isNilOrEmpty, formattedPath),
      assocPath(formattedPath, defaultValue)
    )(obj);
  }
);
