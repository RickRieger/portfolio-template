// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: 'Rick',
  // Typed out under the greeting (keep it under ~34 characters to fit the animation)
  tagline: 'Business Analyst & Developer',
};
const background = {
  // Options: Snow or Particle
  type: 'Particle',
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = 'About Me';
const about = {
  paragraph:
    "I'm a Business Analyst at Dominion Leasing Software, where I work between our clients and our code: I gather requirements and write Statements of Work, then help deliver them by writing SQL, building Crystal Reports, and fixing bugs in our ASP.NET (Visual Basic) application. I'm an Army veteran, husband, and father who came into tech through Reynolds Community College and full-stack bootcamps at Code Immersives (NYC) and devCodeCamp. Building strong relationships with stakeholders, customers, vendors, and teammates matters to me, and lately I've been focused on cloud computing. Let's connect :)",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: 'HTML5',
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: 'fab fa-html5',
  },
  {
    name: 'CSS3',
    // svg: '',
    faClass: 'fab fa-css3',
  },
  {
    name: 'Javascript',
    // svg: '',
    faClass: 'fab fa-js',
  },
  {
    name: 'Node',
    // svg: '',
    faClass: 'fab fa-node',
  },
  {
    name: 'Python',
    // svg: '',
    faClass: 'fab fa-python',
  },
  {
    name: 'Github',
    // svg: '',
    faClass: 'fab fa-github',
  },
  {
    name: 'Git',
    // svg: '',
    faClass: 'fab fa-git',
  },
  {
    name: 'React',
    // svg: '',
    faClass: 'fab fa-react',
  },

  {
    name: 'SQL',
    // svg: '',
    faClass: 'fas fa-database',
  },
  {
    name: 'Crystal Reports',
    faClass: 'fas fa-chart-bar',
  },
  {
    name: 'ASP.NET / VB',
    faClass: 'fab fa-microsoft',
  },
  {
    name: 'AWS',
    // svg: '',
    faClass: 'fab fa-aws',
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = 'Full Stack Projects (MERN Stack)';
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: 'project1',
    name: 'Ticket-Tracker',
    url: 'https://ticket-tracker-app.netlify.app/',
    url_github_frontend:
      'https://github.com/RickRieger/bug-tracker-frontend-redux',
    url_github_backend: 'https://github.com/RickRieger/bug-tracker-backend',
  },
  {
    // Add image in './styles/images.css' in #project2
    id: 'project2',
    name: 'app-etizing recipes',
    url: 'https://appetizing.netlify.app/',
    url_github_frontend:
      'https://github.com/RickRieger/fullstack-recipes-frontend',
    url_github_backend:
      'https://github.com/RickRieger/fullstack-recipes-backend',
  },
  {
    // Add image in './styles/images.css' in #project3
    id: 'project3',
    name: 'Movies With Friends',
    url: 'https://movies-and-friends.netlify.app/',
    url_github_frontend: 'https://github.com/RickRieger/auth-frontend',
    url_github_backend:
      'https://github.com/RickRieger/FullStackMovieAppBackEnd',
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you don't have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = 'Front-End Projects hosted on GitHub Pages';
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: 'misc1',
    name: 'jQuery-Jeopardy',
    url: 'https://rickrieger.github.io/jquery-jeopardy/',
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: 'misc2',
    name: 'BS- Paint',
    url: 'https://rickrieger.github.io/bs-paint/',
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: 'misc3',
    name: 'Satellite Finder',
    url: 'https://rickrieger.github.io/i-need-space/',
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: 'misc4',
    name: 'Recipe Finder',
    url: 'https://rickrieger.github.io/final_project-/',
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: 'misc5',
    name: 'Drum Machine',
    url: 'https://rickrieger.github.io/drum-machine/',
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: 'misc6',
    name: 'Hacker-news-clone',
    url: 'https://rickrieger.github.io/hacker-snooze/',
  },
  {
    // Add image in './styles/images.css' in #misc7
    // Reynolds Community College team project (2020): company website for MITS
    id: 'misc7',
    name: 'MITS Company Website',
    url: 'https://rickrieger.github.io/Mits/',
    url_github_frontend: 'https://github.com/RickRieger/Mits',
  },
  {
    // Add image in './styles/images.css' in #misc8
    // Academind CSS course project (2020): multi-page hosting company site
    id: 'misc8',
    name: 'uHost (CSS Course Project)',
    url: 'https://rickrieger.github.io/CSS_course_project_Acadamind/',
    url_github_frontend:
      'https://github.com/RickRieger/CSS_course_project_Acadamind',
  },
  {
    // Add image in './styles/images.css' in #misc9
    // Code Immersives layout exercise (2021), rebranded as the fictional DemoEats
    id: 'misc9',
    name: 'DemoEats (HTML/CSS layout)',
    url: 'https://rickrieger.github.io/gitHubCopyCat/',
    url_github_frontend: 'https://github.com/RickRieger/gitHubCopyCat',
  },
];
// Small bootcamp exercises, shown together on one text-only card (no image).
// To add one, copy a line below: name, live site url (optional), code url (optional).
const exercisesTitle = 'Bootcamp Exercises';
const exercisesSubtitle = 'Code Immersives, NYC (2021)';
const exercises = [
  {
    name: 'Links, Pictures & Broken Code',
    url: 'https://rickrieger.github.io/links-pictures-and-broken-code/',
    code: 'https://github.com/RickRieger/links-pictures-and-broken-code',
  },
  {
    // Test-based exercise (Jest), no web page: code link only
    name: 'Make Variables Not War',
    code: 'https://github.com/RickRieger/make-variables-not-war',
  },
  {
    name: 'Functions Ahoy',
    code: 'https://github.com/RickRieger/functions-ahoy',
  },
  {
    name: 'Functions With Parameters',
    code: 'https://github.com/RickRieger/functions-with-parameters',
  },
  {
    name: 'The Function Returns',
    code: 'https://github.com/RickRieger/the-function-returns',
  },
  {
    name: 'Return Of The String',
    code: 'https://github.com/RickRieger/return-of-the-string',
  },
  {
    name: 'Stop Calling Yourself',
    code: 'https://github.com/RickRieger/stop-calling-yourself-stop-calling-yourself',
  },
  {
    name: "Foolin' With Booleans",
    code: 'https://github.com/RickRieger/foolin-with-booleans',
  },
  {
    name: 'If Learning',
    code: 'https://github.com/RickRieger/if-learning',
  },
  {
    name: 'Fizzy (FizzBuzz)',
    code: 'https://github.com/RickRieger/fizzy',
  },
  {
    name: 'Node-Along (command-line scripts)',
    code: 'https://github.com/RickRieger/node-along',
  },
  {
    name: 'Node Immersives (terminal app)',
    code: 'https://github.com/RickRieger/node-immersives',
  },
  {
    name: 'Log Up: Back End (login logic)',
    code: 'https://github.com/RickRieger/log-up-back-end',
  },
  {
    name: 'Log Up: Front End (command-line login app)',
    code: 'https://github.com/RickRieger/log-up-front-end',
  },
  {
    name: 'Color Cleaver: Back End (color-wheel logic)',
    code: 'https://github.com/RickRieger/color-cleaver-backend',
  },
  {
    name: 'Color Cleaver: Front End (command-line color mixer)',
    code: 'https://github.com/RickRieger/color-cleaver-front-end',
  },
  {
    name: 'Responsive Animated Nav Menu',
    url: 'https://rickrieger.github.io/FlexBoxAnimateMenu-/',
    code: 'https://github.com/RickRieger/FlexBoxAnimateMenu-',
  },
  {
    name: 'You Deserve Arrays',
    code: 'https://github.com/RickRieger/you-deserve-arrays',
  },
  {
    name: 'Hip Hip Array (array methods)',
    code: 'https://github.com/RickRieger/hip-hip-array',
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = 'Get in Touch';
const contact = {
  pitch:
    'Thank you so much for visiting my portfolio! I hope to hear from you soon.',
  copyright: 'Rick Rieger',
  contactUrl: '',
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: 'https://github.com/RickRieger',
  facebook: 'https://www.facebook.com/rick.rieger.167',
  twitter: 'https://twitter.com/rickrieger36251',
  instagram: 'https://www.instagram.com/rickrieger/',
  linkedin: 'https://www.linkedin.com/in/rick-rieger/',
  resume: 'https://rieger-bucket.s3.amazonaws.com/Rick_Rieger.pdf',
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  exercises,
  exercisesTitle,
  exercisesSubtitle,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
