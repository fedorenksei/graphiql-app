import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from '../model/router';

export const App = () => {
  return <RouterProvider router={router} />;
};
