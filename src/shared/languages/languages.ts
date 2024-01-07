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
  },
};

export default languages;
