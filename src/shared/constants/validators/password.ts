import { RegisterOptions } from 'react-hook-form';

export const passwordValidation: RegisterOptions = {
  required: {
    value: true,
    message: 'Field is required',
  },
  validate: {
    hasNumber: (val) =>
      /^(?=.*[0-9])/.test(val) || 'Password should contain numbers',
    hasLower: (val) =>
      /^(?=.*[a-z])/.test(val) || 'Password should contain lowercase letter',
    hasUpper: (val) =>
      /^(?=.*[A-Z])/.test(val) || 'Password should contain uppercase letter',
    hasSymbol: (val) =>
      /^(?=.*[!@#$%^&*])/.test(val) || 'Password should contain symbol',
    moreThan: (val) =>
      val.length >= 8 || 'Password length should be more than 8',
  },
};
