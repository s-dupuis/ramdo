import { assoc, curry, propSatisfies, when } from 'ramda';
import { isNilOrEmpty } from './isNilOrEmpty';

export const propDefaultTo = curry(
  (prop, defaultValue, obj) => when(
    propSatisfies(isNilOrEmpty, prop),
    assoc(prop, defaultValue)
  )(obj)
);
