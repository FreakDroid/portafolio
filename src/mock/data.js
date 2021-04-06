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
    img: 'stark.jpg',
    title: 'Stark',
    info:
      'Stark is a home security system with virtual security guards that monitor your cameras. Our goal is to enhance the Ring customer experience and make neighbourhoods safer by offering augmented security, increased peace of mind.',
    info2: 'Here my work is focus on the frontend using React, Javascript, Less and Mobx',
    url: 'https://latam-es.ring.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Sesame.jpg',
    title: 'Sesame integration',
    info:
      "Sesame is a project where the Amazon warehouse team integrated the Stark tool to monitor the different trucks which come into Amazon's warehouse.",
    info2:
      "My job was to help with the integration, customize the current UI to open and close the warehouses' gates using Stark.",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'form.jpg',
    title: 'Angular Dynamic Form',
    info:
      'Create a form base on the information provided by an API, baked using Angular 5 and Javascript.',
    info2: '',
    url: 'https://github.com/FreakDroid/DynamicForm',
    repo: 'https://github.com/FreakDroid/DynamicForm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'map.jpg',
    title: 'React Marzipano',
    info:
      'Marzipano is a library to create a map in 360. This project is a wrapper of the original lib to make it easier to use it with React.',
    info2: '',
    url: '',
    repo: 'https://github.com/BLACKBOX-ArchViz/react-marzipano', // if no repo, the button will not show up
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
      url: 'https://twitter.com/DevWilfredo',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wilfredo-roberto-perez-lopez-3b92185b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/FreakDroid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
