import { RegisterOptions, useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { RootPasswordInput } from '@/shared/ui/RootPasswordInput';
import { SignInFormType } from '../model/types';

const containerClasses =
  'min-h-screen flex justify-center items-center bg-white';
const formClasses = 'max-w-xs flex flex-col gap-4';
// const inputClasses = 'border-red-100 border-2 w-full';

export const SignInForm = () => {
  const { login } = useAuth();
  const defaultValues: SignInFormType = {
    email: '',
    password: '',
  };
  const form = useForm<SignInFormType>({
    defaultValues,
    mode: 'all',
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;
  const isFormValid = !(!isDirty || !isValid);

  // const emailValidation: RegisterOptions<SignInFormType, 'email'> = {
  //   required: {
  //     value: true,
  //     message: 'Field is required',
  //   },
  //   pattern: {
  //     value:
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //     message: 'Email is invalid',
  //   },
  // };

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

  const onSubmit = (data: SignInFormType) => {
    login(data.email, data.password);
  };

  return (
    <div className={containerClasses}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={formClasses}
      >
        {/* <RootInput
          {...register('email', emailValidation)}
          className={inputClasses}
          type="text"
          placeholder="email"
          inputMode="email"
        /> */}
        {errors.email && <span>{errors.email.message}</span>}
        <RootPasswordInput
          {...register('password', passwordValidation)}
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Button
          isDisabled={!isFormValid}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};
