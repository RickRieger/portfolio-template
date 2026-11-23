// =====================================================================
// All site text and links live in this file. Edit here; no need to touch
// the components. Sections appear on the page in the order listed in App.js.
// =====================================================================

// Scroll animations (AOS)
const animation = {
  animate: true, // false turns off fade-in animations
  duration: 600, // milliseconds
  once: true, // true = animate the first time a section scrolls into view only
};

// ---------------------------------------------------------------------
// Hero (top of the page)
// ---------------------------------------------------------------------
const hero = {
  name: 'Rick Rieger',
  title: 'Business Analyst & Developer',
  tagline:
    'I turn business needs into working software: writing the requirements, then digging into the SQL, reports and code to deliver them.',
};

// ---------------------------------------------------------------------
// About
// ---------------------------------------------------------------------
const about = {
  title: 'About Me',
  paragraphs: [
    "I'm a Business Analyst at Dominion Leasing Software, where I sit between our clients and our code. I gather requirements and write Statements of Work, then help deliver them: writing SQL, building Crystal Reports, and fixing bugs in our ASP.NET (Visual Basic) application.",
    'Before tech, I served in the U.S. Army. I came into software through Reynolds Community College and two full-stack bootcamps, Code Immersives in New York City and devCodeCamp, where I built web apps with JavaScript, React, Node, Express, MongoDB and Python.',
    "I'm a husband and father, and I care about building strong working relationships with clients, stakeholders, vendors and teammates alike. Lately I've been focused on cloud computing and where it fits in the work I do.",
  ],
};

// ---------------------------------------------------------------------
// Current role
// ---------------------------------------------------------------------
const experience = {
  title: 'What I Do',
  role: 'Business Analyst',
  company: 'Dominion Leasing Software',
  summary:
    'Business analysis with hands-on technical delivery on leasing software built in ASP.NET and Visual Basic.',
  highlights: [
    {
      icon: 'fas fa-file-signature',
      label: 'Requirements & SOWs',
      text: 'Meet with clients, define the problem, and write Statements of Work that spell out goals, solution and scope.',
    },
    {
      icon: 'fas fa-database',
      label: 'SQL',
      text: 'Write and modify SQL queries and stored procedures behind client customizations and data fixes.',
    },
    {
      icon: 'fas fa-chart-bar',
      label: 'Crystal Reports',
      text: 'Build and update Crystal Reports so clients get the operational and financial reporting they need.',
    },
    {
      icon: 'fas fa-bug',
      label: 'Maintenance & Bug Fixes',
      text: 'Track down and fix defects in our ASP.NET / Visual Basic application.',
    },
  ],
};

// ---------------------------------------------------------------------
// Skills (grouped chips)
// ---------------------------------------------------------------------
const skills = {
  title: 'Skills',
  groups: [
    {
      name: 'Business Analysis',
      items: ['Requirements gathering', 'Statements of Work', 'Client communication', 'Process documentation'],
    },
    {
      name: 'Data & Reporting',
      items: ['SQL', 'Stored procedures', 'Crystal Reports', 'MongoDB'],
    },
    {
      name: 'Development',
      items: ['ASP.NET', 'Visual Basic', 'JavaScript', 'React', 'Node.js / Express', 'Python', 'HTML & CSS', 'Git & GitHub'],
    },
    {
      name: 'Cloud',
      items: ['AWS', 'AWS Lambda', 'Amazon S3', 'Netlify', 'GitHub Pages & Actions'],
    },
  ],
};

// ---------------------------------------------------------------------
// Cloud computing interest
// ---------------------------------------------------------------------
const cloud = {
  title: 'Cloud Computing',
  intro:
    "Cloud computing is where I'm putting my learning time. I want to understand how applications are hosted, scaled and automated, and how the cloud can change the way business software gets delivered.",
  points: [
    {
      icon: 'fab fa-aws',
      label: 'Hands-on so far',
      text: 'Deployed full-stack apps, wrote my first AWS Lambda function, and host this site’s images and my resume on Amazon S3.',
    },
    {
      icon: 'fas fa-cogs',
      label: 'Automation',
      text: 'This portfolio builds and deploys itself with GitHub Actions on every push.',
    },
    {
      icon: 'fas fa-route',
      label: 'Where I’m headed',
      text: 'Going deeper on AWS services and cloud architecture, with an eye toward certification.',
    },
  ],
};

// ---------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------
const projectsSection = {
  title: 'Projects',
  intro:
    "A selection of what I've built, from bootcamp full-stack apps to front-end sites. I'm revisiting my GitHub archive project by project, so more is on the way.",
};

// Full-stack apps. Image for each id lives in './styles/images.css' (.project1 etc.)
const fullStackTitle = 'Full-Stack Applications (MERN)';
const projects = [
  {
    id: 'project1',
    name: 'Ticket-Tracker',
    description: 'Bug and ticket tracking app with a Redux front end.',
    tags: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
    url: 'https://ticket-tracker-app.netlify.app/',
    url_github_frontend: 'https://github.com/RickRieger/bug-tracker-frontend-redux',
    url_github_backend: 'https://github.com/RickRieger/bug-tracker-backend',
  },
  {
    id: 'project2',
    name: 'App-etizing Recipes',
    description: 'Full-stack recipe app.',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    url: 'https://appetizing.netlify.app/',
    url_github_frontend: 'https://github.com/RickRieger/fullstack-recipes-frontend',
    url_github_backend: 'https://github.com/RickRieger/fullstack-recipes-backend',
  },
  {
    id: 'project3',
    name: 'Movies With Friends',
    description: 'Movie app with user accounts and authentication.',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    url: 'https://movies-and-friends.netlify.app/',
    url_github_frontend: 'https://github.com/RickRieger/auth-frontend',
    url_github_backend: 'https://github.com/RickRieger/FullStackMovieAppBackEnd',
  },
];

// Front-end projects on GitHub Pages. Image for each id lives in './styles/images.css'
const frontEndTitle = 'Front-End Projects';
const miscellaneous = [
  {
    id: 'misc7',
    name: 'MITS Company Website',
    description: 'Company site for a Reynolds Community College team project. Bootstrap 4, Formspree contact form.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    url: 'https://rickrieger.github.io/Mits/',
    url_github_frontend: 'https://github.com/RickRieger/Mits',
  },
  {
    id: 'misc8',
    name: 'uHost',
    description: "Multi-page responsive hosting-company site from Academind's CSS course.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://rickrieger.github.io/CSS_course_project_Acadamind/',
    url_github_frontend: 'https://github.com/RickRieger/CSS_course_project_Acadamind',
  },
  { id: 'misc1', name: 'jQuery Jeopardy', tags: ['jQuery'], url: 'https://rickrieger.github.io/jquery-jeopardy/' },
  { id: 'misc2', name: 'BS Paint', tags: ['JavaScript'], url: 'https://rickrieger.github.io/bs-paint/' },
  { id: 'misc3', name: 'Satellite Finder', tags: ['JavaScript', 'API'], url: 'https://rickrieger.github.io/i-need-space/' },
  { id: 'misc4', name: 'Recipe Finder', tags: ['JavaScript', 'API'], url: 'https://rickrieger.github.io/final_project-/' },
  { id: 'misc5', name: 'Drum Machine', tags: ['JavaScript'], url: 'https://rickrieger.github.io/drum-machine/' },
  { id: 'misc6', name: 'Hacker News Clone', tags: ['JavaScript', 'API'], url: 'https://rickrieger.github.io/hacker-snooze/' },
];

// Small bootcamp exercises: one text-only card. Add one line per exercise.
const exercisesTitle = 'Bootcamp Exercises';
const exercisesSubtitle = 'Code Immersives, NYC (2021)';
const exercises = [
  {
    name: 'Links, Pictures & Broken Code',
    url: 'https://rickrieger.github.io/links-pictures-and-broken-code/',
    code: 'https://github.com/RickRieger/links-pictures-and-broken-code',
  },
];

// ---------------------------------------------------------------------
// Contact (form sends through Formspree)
// ---------------------------------------------------------------------
const contact = {
  title: 'Get in Touch',
  pitch:
    "Thanks for stopping by. Whether it's a project, a role, or just talking shop about cloud and business software, I'd like to hear from you.",
  formspreeUrl: 'https://formspree.io/f/mlezdedd',
  emailSubjectPrefix: '[Portfolio]',
  copyright: 'Rick Rieger',
};

const social = {
  github: 'https://github.com/RickRieger',
  linkedin: 'https://www.linkedin.com/in/rick-rieger/',
  facebook: 'https://www.facebook.com/rick.rieger.167',
  twitter: 'https://twitter.com/rickrieger36251',
  instagram: 'https://www.instagram.com/rickrieger/',
  resume: 'https://rieger-bucket.s3.amazonaws.com/Rick_Rieger.pdf',
};

export {
  animation,
  hero,
  about,
  experience,
  skills,
  cloud,
  projectsSection,
  fullStackTitle,
  projects,
  frontEndTitle,
  miscellaneous,
  exercises,
  exercisesTitle,
  exercisesSubtitle,
  contact,
  social,
};
