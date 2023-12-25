export interface Languages {
  en: Record<string, string>;
  ru: Record<string, string>;
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
