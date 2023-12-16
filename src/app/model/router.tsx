import { Main } from '@/pages/Main';
import { Welcome } from '@/pages/Welcome';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { PopupHandler } from './popupHandler/ui/PopupHandler';
import { store } from './store/store';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Welcome />
        <PopupHandler />
      </>
    ),
  },
  {
    path: '/main',
    element: <Main />,
    loader: () => {
      const isUserAuth = !!store.getState().userReducer.uid;
      if (!isUserAuth) {
        return redirect('/?popup=sign-up');
      }
      return null;
    },
  },
]);
