import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from '../../shared/languages/LanguageProvider';
import '../model/firebase/firebase';
import { router } from '../model/router';
import { store } from '../model/store/store';
import './App.css';
import { SnowBlock } from './snowflakes/Snowflakes';

export const App = () => {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <SnowBlock />
      </Provider>
    </LanguageProvider>
  );
};
