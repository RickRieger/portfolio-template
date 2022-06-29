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
    "I am an Army veteran, husband, and father with a deep passion for coding and a relentless drive to find solutions. Building strong relationships is important to me, as I value the ability to work with people at all levels of an organization, including stakeholders, customers, vendors, and team members.  Let's connect :) ",
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
    name: 'Database',
    // svg: '',
    faClass: 'fas fa-database',
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
const section3Title = 'Full Stack Projects hosted on AWS (MERN Stack)';
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: 'project1',
    name: 'Ticket-Tracker',
    url: 'https://ticket-tracker.riegercodes.com/',
    url_github_frontend:
      'https://github.com/RickRieger/bug-tracker-frontend-redux',
    url_github_backend: 'https://github.com/RickRieger/bug-tracker-backend',
  },
  {
    // Add image in './styles/images.css' in #project2
    id: 'project2',
    name: 'app-etizing recipes',
    url: 'https://app-etizing.findmypracticedomain.com/',
    url_github_frontend:
      'https://github.com/RickRieger/fullstack-recipes-frontend',
    url_github_backend:
      'https://github.com/RickRieger/fullstack-recipes-backend',
  },
  {
    // Add image in './styles/images.css' in #project3
    id: 'project3',
    name: 'Movies With Friends',
    url: 'https://findmypracticedomain.com/',
    url_github_frontend: 'https://github.com/RickRieger/auth-frontend',
    url_github_backend:
      'https://github.com/RickRieger/FullStackMovieAppBackEnd',
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you don't have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = 'JavaScript Projects hosted on Github Pages';
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
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
