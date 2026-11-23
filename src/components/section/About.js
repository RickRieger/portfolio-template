import React from 'react';
import { about } from '../../profile';

const About = () => (
  <section id='about' className='section'>
    <div className='container container--narrow' data-aos='fade-up'>
      <h2 className='section__title'>{about.title}</h2>
      {about.paragraphs.map((p, i) => (
        <p key={i} className='about__text'>
          {p}
        </p>
      ))}
    </div>
  </section>
);

export default About;
