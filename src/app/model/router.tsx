import { Main } from '@/pages/Main';
import { Welcome } from '@/pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/main',
    element: <Main />,
  },
]);
