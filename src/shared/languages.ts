export interface Language {
  main: string;
  about: string;
  login: string;
  welcome: string;
}

export interface Languages {
  en: Language;
  ru: Language;
}

const languages: Languages = {
  en: {
    main: 'Main',
    about: 'About',
    login: 'Login',
    welcome: 'Welcom page',
  },
  ru: {
    main: 'Главная',
    about: 'О нас',
    login: 'Вход',
    welcome: 'Страница приветствия',
  },
};

export default languages;
