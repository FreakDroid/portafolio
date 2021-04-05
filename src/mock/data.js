import { nanoid } from 'nanoid';
import jsSquare from '../images/js-square-brands.svg';
import python from '../images/python-brands.svg';
import reactBrand from '../images/react-brands.svg';
import cpp from '../images/cpp_logo.svg';
import less from '../images/less-brands.svg';
import nodejs from '../images/node-brands.svg';

// HEAD DATA
export const headData = {
  title: 'Wilfredo', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Wilfredo',
  subtitle: 'I am Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Wilfredo.png',
  paragraphOne:
    'I am a Software Engineer with more than nine years of experience, Looking for a new and incredible challenge. ' +
    'I love working with React, Javascript, Nodejs, AWS.',
  paragraphThree:
    'In my free time I experiment with Python and C++ creating some stuff or learning algorithms.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

export const technologiesData = [
  {
    id: nanoid(),
    name: 'Javascript',
    icon: jsSquare,
  },
  {
    id: nanoid(),
    name: 'Python',
    icon: python,
  },
  {
    id: nanoid(),
    name: 'React',
    icon: reactBrand,
  },
  {
    id: nanoid(),
    name: 'C++',
    icon: cpp,
  },
  {
    id: nanoid(),
    name: 'NodeJs',
    icon: nodejs,
  },
  {
    id: nanoid(),
    name: 'Less',
    icon: less,
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
