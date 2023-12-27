import { Main } from '@/pages/Main';
import { Welcome } from '@/pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound';
import { Docs } from '@/pages/Docs';
import { PopupHandler } from './popupHandler/ui/PopupHandler';

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
      </>
    ),
  },
  {
    path: '/docs',
    element: <Docs />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerConfig);
