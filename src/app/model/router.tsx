import { Main } from '@/pages/Main';
import { NotFound } from '@/pages/NotFound';
import { Welcome } from '@/pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';
import { PopupHandler } from './popupHandler/ui/PopupHandler';
import { PopupHandlerNoSearchParams } from './popupHandlerNoSearchParams';

export const routerConfig = [
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
        <PopupHandlerNoSearchParams />
      </>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerConfig);
