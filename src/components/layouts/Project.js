import React from 'react';

const Project = ({
  id,
  name,
  url,
  url_github_frontend,
  url_github_backend,
}) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div data-aos='fade-up' className=' col-12 col-lg-4 project-card'>
      <div className='image-project'>
        <div
          className={`img-pro ${id}`}
          onClick={() => openInNewTab(url)}
        ></div>
      </div>
      <a
        title={url}
        className='project-name'
        rel='noopener noreferrer'
        target='_blank'
        href={url}
      >
        <h2>{name}</h2>
      </a>
      {url_github_frontend && (
        <a
          title={url_github_frontend}
          className='project-name'
          rel='noopener noreferrer'
          target='_blank'
          href={url_github_frontend}
        >
          <h4>Click here for frontend code</h4>
        </a>
      )}
      {url_github_backend && (
        <a
          title={url_github_backend}
          className='project-name'
          rel='noopener noreferrer'
          target='_blank'
          href={url_github_backend}
        >
          <h4>Click here for backend code</h4>
        </a>
      )}
    </div>
  );
};

export default Project;
