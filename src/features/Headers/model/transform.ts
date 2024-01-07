import { UiHeader } from '../types/types';

export const transformHeaders = (
  uiHeaders: UiHeader[],
): Record<string, string> => {
  return uiHeaders.reduce<Record<string, string>>((acc, curr) => {
    // eslint-disable-next-line no-param-reassign
    if (curr.name && curr.value) acc[curr.name] = curr.value;
    return acc;
  }, {});
};
