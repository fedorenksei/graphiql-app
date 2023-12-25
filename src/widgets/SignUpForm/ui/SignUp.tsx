import { FormProvider, useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { RootInput } from '@/shared/ui/RootInput';
import { emailValidation } from '@/shared/constants/validators/email';
import { RootPasswordInput } from '@/shared/ui/RootPasswordInput';
import { createRepeatPasswordValidator } from '@/shared/constants/validators/repeatPassword';
import { passwordValidation } from '@/shared/constants/validators/password';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { SignUpFormType } from '../model/types';

export const SignUpForm = () => {
  const { signUp } = useAuth();
  const [loading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValues: SignUpFormType = {
    email: '',
    password: '',
    repeatPassword: '',
  };
  const form = useForm<SignUpFormType>({
    defaultValues,
    mode: 'all',
  });

  const { handleSubmit, formState, trigger, watch } = form;
  const { errors, isDirty, isValid } = formState;
  const isFormValid = !(!isDirty || !isValid);

  const onSubmit = async (data: SignUpFormType) => {
    setIsLoading(true);
    const res = await signUp(data.email, data.password);
    if (typeof res === 'string') {
      setError(res);
    } else {
      navigate('/main');
    }
    setIsLoading(false);
  };

  const goToSignIn = () => {
    searchParams.set('popup', POPUP_NAMES.SIGN_IN);
    setSearchParams(searchParams);
  };

  return (
    <div
      className="flex justify-center items-center bg-slate-800 p-10 text-white rounded-xl cursor-default"
      onClick={(e) => e.stopPropagation()}
      role="button"
      tabIndex={0}
    >
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xs flex flex-col gap-4 relative"
        >
          <h1 className="text-2xl text-center mb-1">Sign up</h1>
          <RootInput
            formFieldProps={{
              validator: emailValidation,
              name: 'email',
              message: errors.email?.message,
            }}
            data-testid="sign-up-email"
            type="text"
            placeholder="email"
            inputMode="email"
          />
          <RootPasswordInput
            formFieldProps={{
              validator: {
                ...passwordValidation,
                onChange: () => trigger('repeatPassword'),
              },
              name: 'password',
              message: errors.password?.message,
            }}
            data-testid="sign-up-password"
            placeholder="password"
          />
          <RootPasswordInput
            formFieldProps={{
              validator: createRepeatPasswordValidator(watch),
              name: 'repeatPassword',
              message: errors.repeatPassword?.message,
            }}
            data-testid="sign-up-repeat"
            placeholder="repeat password"
          />
          <Button
            isDisabled={!isFormValid}
            isLoading={loading}
            className="mb-8"
            type="submit"
            data-testid="sign-up-button"
          >
            Sign up
          </Button>
          {!!error && (
            <span className="absolute bottom-8 text-center w-full text-red-600 text-[14px]">
              {error}
            </span>
          )}
          <button
            onClick={goToSignIn}
            className="text-center duration-300 w-full underline text-[12px] opacity-80 hover:opacity-100"
            type="button"
          >
            I&apos;m already have an account
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
