import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '../model/router';
import { store } from '../model/store/store';
import { LanguageProvider } from '../../shared/languages/LanguageProvider';
import './App.css';
import '../model/firebase/firebase';

export const App = () => {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LanguageProvider>
  );
};
