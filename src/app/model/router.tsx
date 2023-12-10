import { Main } from '@/pages/Main';
import { SignUp } from '@/pages/SignUp/ui/SignUp';
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
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
