# Rick Rieger — Developer Portfolio

### 🔗 Live site: **[rickrieger.github.io/portfolio-template](https://rickrieger.github.io/portfolio-template/)**

My personal portfolio: about me, skills, full-stack projects, front-end projects hosted on GitHub Pages, and a contact form.

- **Built with:** React 17 (Create React App), Bootstrap 5, AOS scroll animations, tsParticles background, Formspree contact form
- **Edit content in:** `src/profile.js` (text, projects, links) and `src/styles/images.css` (project images)
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds the site and publishes it to GitHub Pages on every push to `master`. `homepage` in `package.json` points to the `/portfolio-template/` subfolder so asset paths resolve.
- **Based on:** [kaustubhai/portfolio-template](https://github.com/kaustubhai/portfolio-template) (original template README below)
- **Newer site:** my redesigned personal site lives at [rickrieger.github.io](https://rickrieger.github.io/) ([repo](https://github.com/RickRieger/rickrieger.github.io)). This "classic" portfolio stays live with its original look and gets the same content and bug fixes.

#### Change log
- **2026-11-23: Shared fixes with the new site** (look unchanged):
  - **Dark mode is now opt-in.** Scripts in `public/index.html` switched dark mode on automatically for visitors whose OS was set to dark, inverting the whole page. They also ran before React rendered, so they could error on a missing element. They're removed. Dark mode now turns on only with the toggle, and `Header.js` restores a saved choice after the page renders.
  - **Dead links:** removed the techhire.io profile link, which returns 404. `sitemap.xml` and `robots.txt` pointed to the original template author's site and now point here. The web manifest is renamed from "Create React App Sample".
  - **New wording:** the About text describes my current role as a Business Analyst at Dominion Leasing Software (SOWs, SQL, Crystal Reports, ASP.NET/VB), my background, and my interest in cloud computing. The header tagline is now "Business Analyst & Developer". Added SQL, Crystal Reports and ASP.NET/VB to skills.
  - **Accurate section titles:** "Full Stack Projects hosted on AWS" → "Full Stack Projects (MERN Stack)" (the front ends are on Netlify), and "JavaScript Projects…" → "Front-End Projects hosted on GitHub Pages".
  - **Mouse pointer:** removed `cursor: none` from project images, which made the pointer disappear over them.
  - **Contact form:** emails are labeled `[Portfolio (classic)]` with a `source` field, and the email field uses `type="email"` (it was `type="mail"`, which isn't a real input type).
- **2026-11-16:** Added a text-only "Bootcamp Exercises" card that lists small Code Immersives exercises with live and code links. Its data is the `exercises` array in `src/profile.js`, and the card is `src/components/layouts/ExercisesCard.js`. First entry: Links, Pictures & Broken Code.
- **2026-11-16:** Added uHost (Academind CSS course project, 2020) to the GitHub Pages projects, with live and code links.
- **2026-11-16:** Added the MITS Company Website (Reynolds Community College team project, 2020) to the GitHub Pages projects, with a "See frontend code" link. Set up GitHub Pages deployment through GitHub Actions. Fixed favicon links that used root paths (`/favicon-32x32.png`), which break when the site is served from a subfolder.

---

# Web Developer React Portfolio ⚡️ [![GitHub](https://img.shields.io/github/license/kaustubhai/portfolio-template?color=blue)](https://github.com/kaustubhai/portfolio-template/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/kaustubhai/portfolio-template)](https://github.com/kaustubhai/portfolio-template/stargazers)

## A clean, beautiful and responsive react portfolio template for Developers!


<p align="center">
  <kbd>
<img src="https://github.com/kaustubhai/portfolio-template/blob/master/public/portfolio-example.gif?raw=true"></img>
  </kbd>
</p>


Just change `src/profile.js` to get your personal portfolio. Feel free to use it as-is or customize it as much as you want.

To Update the image go to `src/styles/images.css`  
To change colors, go to `src/styles/style.css`

But if you want to **contribute** and make this much better for other developer raise a [Issue](https://github.com/kaustubhai/portfolio-template/issues).


If you created something awesome and want to contribute then feel free to open an [pull request](https://github.com/kaustubhai/portfolio-template/pulls).

## Table of Contents
- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [For the Future](#for-the-future)
## Sections
✔️ Full screen Intro\
✔️ About Summary\
✔️ Skills\
✔️ Projects\
✔️ Miscellaneous activities\
✔️ Contact Form\
✔️ Social Profile\

To view a live example, **[click here](https://kaustubhai.netlify.app/)**.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```


## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/kaustubhai/portfolio-template.git

# Go into the repository
$ cd portfolio-template

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

## Change and customize every section according to your need.

#### Personalize page content in `/src/profile.js` & modify it as per your need.

```javascript
/* Change this file to get your Personal Porfolio */


const header = { .... }

const about = { .... }

const skillsBar = { .... }

const projects = { .... }

const miscellaneous = { .... }

const contact = { .... }

const social = { .... }

```


## Deployment
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.


#### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kaustubhai/portfolio-template)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).


## For the Future
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/kaustubhai/portfolio-template/pulls).

- Connect with Github API to get Pinned Projects directly

- Add more Interactivity

- Add More Sections

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---
