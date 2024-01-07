import { ERROR_NAMES } from '../constants/errors';

export interface Languages {
  en: Record<string, string | Record<string, string>>;
  ru: Record<string, string | Record<string, string>>;
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
    meetOurAgileTeam: 'Meet our Agile team',
    aboutUs:
      'We are a team of three developers, and our project was an educational exercise. We embraced Agile methods, breaking our work into sprints, providing daily updates in our chat, and conducting planning meetings. We maintained open communication to address challenges promptly. With the guidance of our mentor acting as a Scrum Master, we navigated project management effectively.',
    ourTeam: 'Team members',
    ourGratitude: 'Our gratitude',
    gratitudeOne: 'We are very grateful to our mentor',
    gratitudeTwo:
      ', for her sensitive guidance and support, constant communication, and unwavering belief in our success. We are equally thankful to Rolling Scopes School for organizing the educational process, the dedication of many mentors, lecturers, administrators, volunteers, and active students. Throughout our education and work on this project, we have elevated both our hard and soft skills to an entirely new level and are fueled with motivation to continue growing. Until we meet again!',
    margarita: 'Margaryta Maletz',
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
    meetOurAgileTeam: 'Наша Agile-команда',
    aboutUs:
      'Мы - команда из трех разработчиков, и наш проект был образовательным. Мы использовали методы Agile, разбив работу на спринты, ежедневно обновляя информацию в чате и проводя совещания по планированию. Мы поддерживали коммуникации для оперативного решения возникающих проблем. Под руководством нашего ментора, выступающего в роли Scrum-мастера, мы эффективно справлялись с управлением проектом.',
    ourTeam: 'Участники команды',
    ourGratitude: 'Наша благодарность',
    gratitudeOne: 'Мы очень благодарны нашему наставнику',
    gratitudeTwo:
      ', за чуткое руководство и поддержку, постоянное общение и непоколебимую веру в наш успех. Мы также благодарны школе Rolling Scopes за организацию образовательного процесса, самоотверженность многих наставников, преподавателей, администраторов, волонтеров и активных студентов. За время обучения и работы над этим проектом мы подняли свои "hard" и "soft" навыки на совершенно новый уровень и полны мотивации к дальнейшему развитию. До новых встреч!',
    margarita: 'Маргарите Малец',
    error: 'Ошибка!',
    [ERROR_NAMES.NETWORK]: `Проблемы с соединением. Возможные причины:
    1. Нет соединения с интернетом
    2. Введен неверный URL
    3. Выбранное API не поддерживает CORS`,
    [ERROR_NAMES.SERVER]: 'Кажется, в данный момент с сервером что-то не так',
    [ERROR_NAMES.URL]: 'Проверьте введенный URL',
  },
};

export default languages;
