import { assocPath, curry, pathSatisfies, when } from 'ramda';
import { formatPath } from './helpers/formatPath';
import { isNilOrEmpty } from './isNilOrEmpty';

export const pathDefaultTo = curry(
  (path, defaultValue, obj) => {
    const formattedPath = formatPath(path);

    return when(
      pathSatisfies(isNilOrEmpty, formattedPath),
      assocPath(formattedPath, defaultValue)
    )(obj);
  }
);
