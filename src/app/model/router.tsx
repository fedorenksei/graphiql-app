import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../../pages/Main';
import { Welcome } from '../../pages/Welcome';

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
