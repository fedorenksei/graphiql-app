import { SignInFormType } from '@/widgets/SignInForm/model/types';
import { SignUpFormType } from '@/widgets/SignUpForm/model/types';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export type UniversalFormType = SignInFormType | SignUpFormType;
export type FormFieldProps = {
  register: UseFormRegister<UniversalFormType>;
  validator: RegisterOptions;
  name: keyof UniversalFormType;
  message: string | undefined;
};
