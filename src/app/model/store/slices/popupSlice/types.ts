import { ERROR_NAMES } from '@/shared/constants/errors';

export type PopupType = {
  name: ERROR_NAMES | null;
  isShown: boolean;
};
