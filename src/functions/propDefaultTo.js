import { assoc, curry, propSatisfies, when } from 'ramda';
import { isNilOrEmpty } from './isNilOrEmpty';

/**
 * When the given prop is null, undefined or empty :
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 * Otherwise, the source object is returned.
 * (String, any, object) => object
 */
export const propDefaultTo = curry(
  (prop, defaultValue, obj) => when(
    propSatisfies(isNilOrEmpty, prop),
    assoc(prop, defaultValue)
  )(obj)
);
