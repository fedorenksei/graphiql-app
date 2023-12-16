import { SignInFormType } from '@/widgets/SignInForm/model/types';
import { Input, InputProps } from '@nextui-org/react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface ExtendedProps extends InputProps {
  register: UseFormRegister<SignInFormType>;
}

export const RootInput = ({ register, ...props }: ExtendedProps) => {
  const emailValidation: RegisterOptions<SignInFormType, 'email'> = {
    required: {
      value: true,
      message: 'Field is required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email is invalid',
    },
  };

  const registered = register('email' as keyof SignInFormType, emailValidation);
  return (
    <Input
      variant="bordered"
      {...registered}
      {...props}
    />
  );
};
