import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { PopupLayout } from '@/shared/ui/PopupLayout';
import { SignInForm } from '@/widgets/SignInForm/ui/SignIn';
import { SignUpForm } from '@/widgets/SignUpForm';
import { ReactNode, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const PopupHandler = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuth } = useAuth();
  const popupName = searchParams.get('popup');
  useEffect(() => {
    if (isAuth && popupName) {
      searchParams.delete('popup');
      setSearchParams(searchParams, { replace: true });
    }
  });

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

  return <PopupLayout isShown={elem !== null}>{elem}</PopupLayout>;
};
