import { is, split, when } from 'ramda';

export const formatPath = path => when(
  is(String),
  split('.')
)(path);
