import { FormProvider, useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { RootPasswordInput } from '@/shared/ui/RootPasswordInput';
import { RootInput } from '@/shared/ui/RootInput';
import { emailValidation } from '@/shared/constants/validators/email';
import { passwordValidation } from '@/shared/constants/validators/password';
import { useState, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { SignInFormType } from '../model/types';
import { LanguageContext } from '../../../shared/languages/LanguageProvider';

export const SignInForm = () => {
  const { words } = useContext(LanguageContext);
  const { login } = useAuth();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues: SignInFormType = {
    email: '',
    password: '',
  };

  const form = useForm<SignInFormType>({
    defaultValues,
    mode: 'all',
  });

  const { handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;
  const isFormValid = !(!isDirty || !isValid);

  const onSubmit = async (data: SignInFormType) => {
    setIsLoading(true);
    const res = await login(data.email, data.password);
    if (!res) {
      setError('invalid login or password');
    } else {
      navigate('/main');
    }
    setIsLoading(false);
  };

  const goToSignUp = () => {
    searchParams.set('popup', POPUP_NAMES.SIGN_UP);
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
          <h1 className="text-2xl text-center mb-1">{words.signin}</h1>
          <RootInput
            formFieldProps={{
              validator: emailValidation,
              name: 'email',
              message: errors.email?.message,
            }}
            type="text"
            placeholder={words.email}
            inputMode="email"
          />
          <RootPasswordInput
            formFieldProps={{
              validator: passwordValidation,
              name: 'password',
              message: errors.password?.message,
            }}
            placeholder={words.password}
          />
          <Button
            isDisabled={!isFormValid}
            isLoading={loading}
            className="mb-8"
            type="submit"
          >
            {words.signin}
          </Button>
          {!!error && (
            <span className="absolute bottom-8 text-center w-full text-red-600 text-[14px]">
              {error}
            </span>
          )}
          <button
            onClick={goToSignUp}
            className="text-center duration-300 w-full underline text-[12px] opacity-80 hover:opacity-100"
            type="button"
          >
            {words.dontAccount}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
