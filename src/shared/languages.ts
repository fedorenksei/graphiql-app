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
    signup: 'Sign up',
    signin: 'Sign in',
    YouLoggedAs: 'You logged in as',
    Logout: 'Logout',
    password: 'password',
    dontAccount: 'I don`t have an account',
    email: 'email',
  },
  ru: {
    main: 'на главную',
    about: 'О нас',
    login: 'Вход',
    welcome: 'Страница приветствия',
    signup: 'Зарегистрироваться',
    signin: 'Войти',
    YouLoggedAs: 'Вы вошли как',
    Logout: 'Выйти',
    password: 'пароль',
    dontAccount: 'У меня нет аккаунта',
    email: 'электронная почта',
  },
};

export default languages;
