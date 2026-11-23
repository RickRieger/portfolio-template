import React from 'react';

// Text-only card listing small exercises: name + "Live" and "Code" links.
// Data comes from `exercises` in src/profile.js.
const ExercisesCard = ({ title, subtitle, exercises }) => {
  if (!exercises || exercises.length === 0) return null;

  return (
    <article className='project project--list' data-aos='fade-up'>
      <div className='project__body'>
        <h4 className='project__name'>{title}</h4>
        {subtitle && <p className='project__desc'>{subtitle}</p>}
        <ul className='exercise-list'>
          {exercises.map((x) => (
            <li key={x.name} className='exercise-item'>
              <span className='exercise-name'>{x.name}</span>
              <span className='exercise-links'>
                {x.url && (
                  <a href={x.url} target='_blank' rel='noopener noreferrer' title={x.url}>
                    Live
                  </a>
                )}
                {x.code && (
                  <a href={x.code} target='_blank' rel='noopener noreferrer' title={x.code}>
                    Code
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExercisesCard;
