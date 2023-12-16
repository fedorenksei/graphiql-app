import { useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { RootPasswordInput } from '@/shared/ui/RootPasswordInput';
import { RootInput } from '@/shared/ui/RootInput';
import { emailValidation } from '@/shared/constants/validators/email';
import { passwordValidation } from '@/shared/constants/validators/password';
import { useState } from 'react';
import { SignInFormType } from '../model/types';

export const SignInForm = () => {
  const { login } = useAuth();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

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

  const onSubmit = async (data: SignInFormType) => {
    setIsLoading(true);
    const res = await login(data.email, data.password);
    if (!res) {
      setError('Invalid login or password');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center bg-slate-800 p-10 text-white rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xs flex flex-col gap-4 relative"
      >
        <RootInput
          formFieldProps={{
            register,
            validator: emailValidation,
            name: 'email',
            message: errors.email?.message,
          }}
          type="text"
          placeholder="email"
          inputMode="email"
        />
        <RootPasswordInput
          formFieldProps={{
            register,
            validator: passwordValidation,
            name: 'password',
            message: errors.password?.message,
          }}
          placeholder="password"
        />
        <Button
          isDisabled={!isFormValid}
          isLoading={loading}
          className="mb-8"
          type="submit"
        >
          Sign in
        </Button>
        {!!error && (
          <span className="absolute bottom-0 text-center w-full text-red-600 text-[16px]">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};
