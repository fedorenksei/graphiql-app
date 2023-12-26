import { SignInFormType } from '@/widgets/SignInForm/model/types';
import { SignUpFormType } from '@/widgets/SignUpForm/model/types';
import { RegisterOptions } from 'react-hook-form';

export type UniversalFormType = SignInFormType & SignUpFormType;
export type FormFieldProps = {
  validator: RegisterOptions;
  name: keyof UniversalFormType;
  message: string | undefined;
};
