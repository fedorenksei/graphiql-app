export interface Languages {
  en: Record<string, string>;
  ru: Record<string, string>;
}

const languages: Languages = {
  en: {
    main: 'to main',
    about: 'About',
    login: 'Login',
    welcome: 'Welcom page',
    signup: 'sign up',
    signin: 'sign in',
    YouLoggedAs: 'You logged in as',
    Logout: 'Logout',
  },
  ru: {
    main: 'на главную',
    about: 'О нас',
    login: 'Вход',
    welcome: 'Страница приветствия',
    signup: 'зарегистрироваться',
    signin: 'войти',
    YouLoggedAs: 'Вы вошли как',
    Logout: 'Выйти',
  },
};

export default languages;
