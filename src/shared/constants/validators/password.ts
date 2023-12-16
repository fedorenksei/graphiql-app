import { RegisterOptions } from 'react-hook-form';

export const passwordValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'Field is required',
  },
  pattern: {
    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
    message: 'Password is invalid',
  },
};
