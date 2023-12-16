import { RegisterOptions, useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { SignUpFormType } from '../model/types';

const containerClasses =
  'min-h-screen flex justify-center items-center bg-white';
const formClasses = 'max-w-xs flex flex-col gap-4';
const inputClasses = 'border-red-100 border-2 w-full';

export const SignUpForm = () => {
  const { signUp } = useAuth();
  const defaultValues: SignUpFormType = {
    email: '',
    password: '',
    repeatPassword: '',
  };
  const form = useForm<SignUpFormType>({
    defaultValues,
    mode: 'all',
  });

  const { register, handleSubmit, formState, trigger, watch } = form;
  const { errors, isDirty, isValid } = formState;
  const isFormValid = !(!isDirty || !isValid);

  const emailValidation: RegisterOptions<SignUpFormType, 'email'> = {
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

  const passwordValidation: RegisterOptions<SignUpFormType, 'password'> = {
    onChange: () => trigger('repeatPassword'),
    required: {
      value: true,
      message: 'Field is required',
    },
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      message: 'Password is invalid',
    },
  };

  const repeatPasswordValidation: RegisterOptions<SignUpFormType, 'password'> =
    {
      validate: (val: string) => {
        if (watch('password') !== val) {
          return 'Passwords is not the same';
        }
        return undefined;
      },
    };

  const onSubmit = (data: SignUpFormType) => {
    signUp(data.email, data.password);
  };

  return (
    <div className={containerClasses}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={formClasses}
      >
        <input
          {...register('email', emailValidation)}
          className={inputClasses}
          type="text"
          placeholder="email"
          inputMode="email"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          {...register('password', passwordValidation)}
          className={inputClasses}
          type="password"
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input
          {...register('repeatPassword', repeatPasswordValidation)}
          className={inputClasses}
          type="password"
          placeholder="repeat password"
        />
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
        <Button
          isDisabled={!isFormValid}
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};
