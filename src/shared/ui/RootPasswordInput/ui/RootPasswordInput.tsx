import { Input, InputProps } from '@nextui-org/react';
import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { SignInFormType } from '@/widgets/SignInForm/model/types';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyeFilledIcon';

interface ExtendedProps extends InputProps {
  register: UseFormRegister<SignInFormType>;
}

export const RootPasswordInput = ({ register, ...props }: ExtendedProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const passwordValidation: RegisterOptions<SignInFormType, 'password'> = {
    required: {
      value: true,
      message: 'Field is required',
    },
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      message: 'Password is invalid',
    },
  };

  const registered = register('password', passwordValidation);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      variant="bordered"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className="max-w-xs"
      {...registered}
      {...props}
    />
  );
};
