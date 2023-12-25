import { Main } from '@/pages/Main';
import { Welcome } from '@/pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound/ui/NotFound';
import { PopupHandler } from './popupHandler/ui/PopupHandler';

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
    element: (
      <>
        <Main />
        <PopupHandler />
      </>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
