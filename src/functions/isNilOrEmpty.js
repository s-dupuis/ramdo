import { either, isNil, isEmpty } from 'ramda';

/**
 * Checks if the input value is null, undefined or empty.
 * any => Boolean
 */
export const isNilOrEmpty = either(isNil, isEmpty);
