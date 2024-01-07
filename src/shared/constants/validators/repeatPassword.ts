import { SignUpFormType } from '@/widgets/SignUpForm/model/types';
import { UseFormWatch } from 'react-hook-form';

export const createRepeatPasswordValidator = (
  watch: UseFormWatch<SignUpFormType>,
) => {
  return {
    validate: (val: string) => {
      if (watch('password') !== val) {
        return 'Passwords is not the same';
      }
      return undefined;
    },
  };
};
