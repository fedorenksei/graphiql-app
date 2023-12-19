import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '../model/router';
import { store } from '../model/store/store';
import { LanguageProvider } from '../../shared/LanguageProvider';
import './App.css';

export const App = () => {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LanguageProvider>
  );
};
