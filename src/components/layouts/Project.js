import React from 'react';

// Picture card for a project. The picture comes from a CSS class named after
// the project's id (see src/styles/images.css).
const Project = ({ id, name, description, tags, url, url_github_frontend, url_github_backend }) => (
  <article className='project' data-aos='fade-up'>
    <a href={url} target='_blank' rel='noopener noreferrer' className='project__media' aria-label={`Open ${name}`}>
      <div className={`project__img ${id}`}></div>
    </a>
    <div className='project__body'>
      <h4 className='project__name'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </h4>
      {description && <p className='project__desc'>{description}</p>}
      {tags && tags.length > 0 && (
        <ul className='chips chips--small'>
          {tags.map((t) => (
            <li key={t} className='chip'>
              {t}
            </li>
          ))}
        </ul>
      )}
      <div className='project__links'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-external-link-alt'></i> Live
        </a>
        {url_github_frontend && (
          <a href={url_github_frontend} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'></i> {url_github_backend ? 'Frontend' : 'Code'}
          </a>
        )}
        {url_github_backend && (
          <a href={url_github_backend} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'></i> Backend
          </a>
        )}
      </div>
    </div>
  </article>
);

export default Project;
