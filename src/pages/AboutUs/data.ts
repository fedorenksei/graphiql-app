export interface MemberData {
  name: string;
  surname: string;
  imageUrl: string;
  shortBio: string;
  github: string;
}

export const membersData: MemberData[] = [
  {
    name: 'Aleksei',
    surname: 'Fedorenko',
    imageUrl: './images/AlekseiFedorenko.png',
    shortBio:
      'I have been developing chat-bots on a platform using JavaScript (ES5) for 2 years. I am learning frontend at RSS since December 2022 from stage 0.',
    github: 'fedorenksei',
  },
  {
    name: 'Dmitriy',
    surname: 'Romanenkov',
    imageUrl: './images/DmitriyRomanenkov.jpg',
    shortBio:
      'I have no relevant development experience, I studied frontend at Rolling Scopes since 2022.',
    github: 'color-zebra',
  },
  {
    name: 'Mikalai',
    surname: 'Tserakhau',
    imageUrl: './images/MikalaiTserakhau.png',
    shortBio:
      'I work as a specialist in the support, repair and sale of computer equipment. I want to become a developer. I like to study frontend at RS since 2022.',
    github: 'nickbis',
  },
];
