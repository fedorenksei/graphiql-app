import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { PopupLayout } from '@/shared/ui/PopupLayout';
import { SignInForm } from '@/widgets/SignInForm/ui/SignIn';
import { SignUpForm } from '@/widgets/SignUpForm';
import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

export const PopupHandler = () => {
  const [searchParams] = useSearchParams();
  const popupName = searchParams.get('popup');

  let elem: ReactNode;

  switch (popupName) {
    case POPUP_NAMES.SIGN_IN:
      elem = <SignInForm />;
      break;
    case POPUP_NAMES.SIGN_UP:
      elem = <SignUpForm />;
      break;
    default:
      elem = null;
  }

  return <PopupLayout>{elem}</PopupLayout>;
};
