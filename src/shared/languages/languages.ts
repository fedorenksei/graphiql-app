import { ERROR_NAMES } from '../constants/errors';

export interface Languages {
  en: Record<string, string>;
  ru: Record<string, string>;
}

const languages: Languages = {
  en: {
    langButton: 'Ру',
    main: 'to main',
    toWelcome: 'to Welcome',
    about: 'About',
    login: 'Login',
    welcome: 'Welcome page',
    mainPage: 'Main page',
    signup: 'Sign up',
    signin: 'Sign in',
    YouLoggedAs: 'You logged in as',
    Logout: 'Logout',
    password: 'password',
    dontAccount: 'I don`t have an account',
    email: 'email',
    repeatPassword: 'repeat password',
    haveAccaunt: 'I`m already have an account',
    hideSchema: 'hide schema',
    showSchema: 'show schema',
    homeButton: 'Home',
    error: 'Error!',
    [ERROR_NAMES.NETWORK]: `Problems with connection. Possible reasons:
    1. No internet connection
    2. Invalid URL entered
    3. The selected API does not support CORS`,
    [ERROR_NAMES.SERVER]:
      'There seems to be something wrong with the server at the moment',
    [ERROR_NAMES.URL]: 'Check the entered URL',
  },
  ru: {
    langButton: 'Eng',
    main: 'на главную страницу',
    toWelcome: 'на страницу приветсвия',
    about: 'О нас',
    login: 'Вход',
    welcome: 'Страница приветствия',
    mainPage: 'Главная страница',
    signup: 'Регистрация',
    signin: 'Войти',
    YouLoggedAs: 'Вы вошли как',
    Logout: 'Выйти',
    password: 'пароль',
    dontAccount: 'У меня нет аккаунта',
    email: 'электронная почта',
    repeatPassword: 'повтори пароль',
    haveAccount: 'У меня уже есть аккаунт',
    hideSchema: 'спрятать схему',
    showSchema: 'показать схему',
    homeButton: 'Домой',
    error: 'Ошбика!',
    [ERROR_NAMES.NETWORK]: `Проблемы с соединением. Возможные причины:
    1. Нет соединения с интернетом
    2. Введен неверный URL
    3. Выбранное API не поддерживает CORS`,
    [ERROR_NAMES.SERVER]: 'Кажется, в данный момент с сервером что-то не так',
    [ERROR_NAMES.URL]: 'Проверьте введенный URL',
  },
};

export default languages;
