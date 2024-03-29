import { Header } from '@/pages/Header';
import { Main } from '@/pages/Main';
import { NotFound } from '@/pages/NotFound';
import { Welcome } from '@/pages/Welcome';
import { Footer } from '@/widgets/Footer';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { PopupHandler } from './popupHandler/ui/PopupHandler';
import { PopupHandlerNoSearchParams } from './popupHandlerNoSearchParams';

export const routerConfig = [
  {
    path: '',
    element: (
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: '',
        element: (
          <>
            <Welcome />
            <PopupHandler />
          </>
        ),
      },
      {
        path: 'main',
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
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
