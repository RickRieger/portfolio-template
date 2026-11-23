import React from 'react';
import { experience, skills } from '../../profile';

const Experience = () => (
  <section id='experience' className='section section--tint'>
    <div className='container'>
      <h2 className='section__title' data-aos='fade-up'>
        {experience.title}
      </h2>
      <div className='role' data-aos='fade-up'>
        <div className='role__header'>
          <h3 className='role__title'>{experience.role}</h3>
          <span className='role__company'>{experience.company}</span>
        </div>
        <p className='role__summary'>{experience.summary}</p>
        <div className='grid grid--4'>
          {experience.highlights.map((h) => (
            <div key={h.label} className='card card--feature'>
              <i className={`card__icon ${h.icon}`}></i>
              <h4 className='card__title'>{h.label}</h4>
              <p className='card__text'>{h.text}</p>
            </div>
          ))}
        </div>
      </div>

      <h3 id='skills' className='subsection__title' data-aos='fade-up'>
        {skills.title}
      </h3>
      <div className='grid grid--4' data-aos='fade-up'>
        {skills.groups.map((g) => (
          <div key={g.name} className='skill-group'>
            <h4 className='skill-group__name'>{g.name}</h4>
            <ul className='chips'>
              {g.items.map((s) => (
                <li key={s} className='chip'>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
