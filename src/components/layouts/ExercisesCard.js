import React from 'react';

// A text-only card listing small exercises: name + "live" and "code" links.
// Data comes from `exercises` in src/profile.js.
const ExercisesCard = ({ title, subtitle, exercises }) => {
  if (!exercises || exercises.length === 0) return null;

  return (
    <div data-aos='fade-up' className='col-12 col-lg-4 project-card'>
      <div className='exercise-list-box'>
        <ul className='exercise-list'>
          {exercises.map((x) => (
            <li key={x.name} className='exercise-item'>
              <span className='exercise-name'>{x.name}</span>
              <span className='exercise-links'>
                {x.url && (
                  <a href={x.url} target='_blank' rel='noopener noreferrer' title={x.url}>
                    live
                  </a>
                )}
                {x.url && x.code && ' · '}
                {x.code && (
                  <a href={x.code} target='_blank' rel='noopener noreferrer' title={x.code}>
                    code
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <h2 className='exercise-card-title'>{title}</h2>
      {subtitle && <h4 className='exercise-card-subtitle'>{subtitle}</h4>}
    </div>
  );
};

export default ExercisesCard;
