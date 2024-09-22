
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I’m so happy you’re here! 😊",
    
    "My name is Tarek Omran, and I’m a Software Support Engineer at GE with a strong passion for web development. I specialize in troubleshooting and resolving complex software issues, ensuring seamless operations and top-notch customer satisfaction. My journey into tech has led me to develop skills in various aspects of software engineering, particularly in web development.",
    
    "Outside of my professional life, I’m enthusiastic about exploring new technologies, contributing to open-source projects, and continuously learning. I enjoy working on personal projects, collaborating with others, and staying updated with the latest trends in technology.",
    
    "I’m excited about connecting with individuals and teams who share a similar passion for technology and innovation. Your visit to my portfolio means a lot to me!",
    
    "Feel free to download my resume here."
  ],
  
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Promptopia",
    description: "A Next.js full stack web app to create prompts and use them. Explore a variety of prompts and enhance your creative process.",
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with the path to an image representing your Promptopia project
    source_code_link: 'https://github.com/Tarek0mran00/Promptopia.git', // Replace with the actual source code link
    demo_link: 'https://promptopia-tflz.vercel.app', // Replace with the actual demo URL
  }
  ,
  {
    name: "Emojipedia",
    description: "A comprehensive guide to emojis with detailed descriptions. Explore a wide range of emojis and learn about their meanings and usage.",
    image: 'https://blog.emojipedia.org/content/images/size/w600/2022/12/Emojipedia-Twitter-Emoji-Stickers-Header-Image.jpg', // Replace with the path to an image representing your Emojipedia project
    source_code_link: 'https://github.com/Tarek0mran00/emojipedia.git', // Replace with the actual source code link
    demo_link: 'https://react-emojipedia-omran.netlify.app/', // Replace with the actual demo URL
  },
  {
    name: "Fanta Drink Web",
    description: "A web application showcasing different Fanta drink flavors using react and tailwind. Browse through a variety of Fanta beverages, view details, and learn more about each drink.",
    image: 'https://images.unsplash.com/photo-1625740822008-e45abf4e01d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    source_code_link: 'https://github.com/Tarek0mran00/fanta-site-react.git', // Replace with the actual source code link
    demo_link: 'https://fanta-app-omran.netlify.app/', // Replace with the actual demo URL
  }
,  
  {
    "name": "Joke Fetcher",
    "description": "An entertaining app that fetches random jokes from an API. Enjoy a collection of jokes, mark your favorites, and refresh for new laughs. The app features an engaging design and user-friendly interface to brighten your day with humor.",
    "image": "https://images.unsplash.com/photo-1504660069764-2b37e279874a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to an image representing your Joke Fetcher app
    "source_code_link": "https://github.com/Tarek0mran00/joker_app.git", // Replace with the actual source code link
    "demo_link": "https://omran-joker-app.netlify.app/" // Replace with the actual demo URL
  }
,  
{
  name: 'Shoes App',
  description: 'An interactive shoe collection app developed using React and styled with Tailwind CSS. Users can view shoe thumbnails and select a shoe to see a larger image.',
  image: 'https://images.unsplash.com/photo-1491892490418-db61fd635ce4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  source_code_link: 'https://github.com/Tarek0mran00/my-shoes-app.git',
  demo_link: 'https://omran-nike-app.netlify.app/'
}
,
  {
    name: "Keeper App",
    description: 'A note-taking application developed using React. Create, edit, and organize your notes efficiently with this intuitive and user-friendly app.',
    image: "https://user-images.githubusercontent.com/91674419/194080548-f101a81a-f5e6-435d-876e-bd3b2f074c39.png", // Replace with the actual image variable or URL
    source_code_link: 'https://github.com/Tarek0mran00/react-note-app.git', // Replace with the actual GitHub link
    demo_link: 'https://keeper-notes-omran.netlify.app/' // Replace with the actual demo link
  }
,  
  {
    name: 'Pawsitive',
    description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Client-Server Chat',
    description: 'This is a chat application that facilitates communication between multiple clients through a centralized server. The application is designed using socket programming and handles multiple client connections concurrently using threads.',
    image: "https://i.pinimg.com/originals/0e/4a/c3/0e4ac37acbff81cd087aa19692a07a9d.gif",
    source_code_link: 'https://github.com/bl33h/clientServerChat',
    demo_link: 'https://youtu.be/Mk1BNqPz1n4',
  },
  {
    name: 'Visit Our Lands',
    description: 'It is a recommendation system built with React and Supabase. This system focuses on providing tourist recommendations for various locations in Guatemala.',
    image: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/uvd82gspopw8orvryulc",
    source_code_link: 'https://github.com/bl33h/visitOurLands',
    demo_link: 'https://visitourlands.netlify.app/',
  },
  {
    name: 'To do app',
    description: 'A simple to do app implemented using React.',
    image: 'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    source_code_link: 'https://github.com/Tarek0mran00/to_do_list_react.git',
    demo_link: 'https://omran-reactjs-to-do-list.netlify.app/',
  }
  
  
  ,
  {
    name: 'Fibonacci & Factorial',
    description: 'A project that includes two LISP programs: one for factorials and the other for Fibonacci sequences. They use recursion, prompt user input, and display results efficiently.',
    image: "https://i.pinimg.com/originals/96/c3/9a/96c39a5cb89092760fe11f355a32f4a4.gif",
    source_code_link: 'https://github.com/bl33h/fibonacciAndFactorial',
    demo_link: 'https://camo.githubusercontent.com/59b3c9969f369559fbeb1ed6a53f159e0e83b1151b82552b5b2165c4e9686e89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31612f4669626f6e616363695f63616c6c5f747265655f352e676966',
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I gained experience using AWS while working at GE as a software support engineer.',
  },

  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },


];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
