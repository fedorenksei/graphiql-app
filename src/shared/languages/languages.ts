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
    baseUrlPlaceholder: 'Enter a GraphQL URL...',
    queryPlaceholder: 'Enter a GraphQL query...',
    variablesPlaceholder: 'Enter JSON with GraphQL variables...',
    aleksei: 'Aleksei Fedorenko',
    alekseiBio:
      'I have been developing chatbots on the platform using JavaScript (ES5) for 2 years now. Since December 2022 I have been learning frontend on RSS from stage 0. In this project I have done project creation, documentation (pr template, project setup, read me), UI, GraphQL queries, tests.',
    dmitriy: 'Dmitriy Romanenkov',
    dmitriyBio:
      'I started working as a developer, studied frontend at Rolling Scopes since 2022. In this project I made authorization, query formatting, introspection, documentation request module, UI, tests.',
    mikalai: 'Mikalai Tserakhau',
    mikalaiBio:
      'I work as a specialist in support, repair and sales of computer equipment. I want to become a developer. I like to study frontend in RS from 2022. In this project I made localization of RU/Eng, UI.',
    request: 'Request',
    submitButton: 'Submit',
    endpoint: 'Endpoint',
    query: 'Query',
    variables: 'Variables',
    addHeader: 'Add header',
    remove: 'Remove',
    headers: 'Headers',
    headerKey: 'Header Key',
    headerValue: 'Header Value',
    response: 'Response',
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
    baseUrlPlaceholder: 'Введите URL сервиса GraphQL...',
    queryPlaceholder: 'Введите GraphQL запрос...',
    variablesPlaceholder: 'Введите переменные GraphQL в формате JSON...',
    aleksei: 'Алексей Федоренко',
    alekseiBio:
      'Занимаюсь разработкой чат-ботов на платформе с использованием JavaScript (ES5) уже 2 года. С декабря 2022 года изучаю фронтенд на RSS с этапа 0. В данном проекте выполнил создание проекта, документацию (pr template, project setup, read me), UI, запросы GraphQL, тесты',
    dmitriy: 'Дмитрий Романенков',
    dmitriyBio:
      'Я уже начал работать разработчиком,  изучал фронтенд в Rolling Scopes с 2022 года. В данном проекте сделал авторизацию, форматирование запросов, интроспекцию, модуль запроса документации, UI, тесты.',
    mikalai: 'Николай Терехов',
    mikalaiBio:
      'Я работаю специалистом по поддержке, ремонту и продаже компьютерной техники. Хочу стать разработчиком. Мне нравится изучать frontend в RS с 2022 года. В данном проекте сделал локализацию RU/Eng, UI.',
    request: 'Запрос',
    submitButton: 'Отправить',
    endpoint: 'Адрес Endpoint',
    query: 'Запрос GraphQL',
    variables: 'Переменные',
    addHeader: 'Добавить заголовок',
    remove: 'Удалить',
    headers: 'Заголовки',
    headerKey: 'Ключ заголовка',
    headerValue: 'Значение заголовка',
    response: 'Ответ',
  },
};

export default languages;
