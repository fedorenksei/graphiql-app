import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '../model/router';
import { store } from '../model/store/store';
import './App.css';
import '../model/firebase/firebase';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
