import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AppApi } from '@/shared/api';
import { router } from '../model/router';
import { store } from '../model/store/store';
import './App.css';
import '../model/firebase/firebase';

export const App = () => {
  const api = AppApi.getInstance();
  const getSchema = async () => {
    console.log(await api.getDefaultSchema());
    console.log(await api.getFieldSchema('Character'));
  };

  getSchema();
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
