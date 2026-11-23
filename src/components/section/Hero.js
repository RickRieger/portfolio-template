import React from 'react';
import { hero, social } from '../../profile';
import photo from '../../assets/rick.jpg';

const Hero = () => (
  <section id='top' className='hero'>
    <div className='container hero__inner'>
      <div className='hero__content'>
        <p className='hero__eyebrow'>Hi, I'm</p>
        <h1 className='hero__name'>{hero.name}</h1>
        <p className='hero__title'>{hero.title}</p>
        <p className='hero__tagline'>{hero.tagline}</p>
        <div className='hero__actions'>
          <a href='#projects' className='btn btn--primary'>
            View my projects
          </a>
          <a href='#contact' className='btn btn--ghost'>
            Get in touch
          </a>
        </div>
        <div className='hero__social'>
          {social.github && (
            <a href={social.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub' title='GitHub'>
              <i className='fab fa-github'></i>
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' title='LinkedIn'>
              <i className='fab fa-linkedin'></i>
            </a>
          )}
          {social.resume && (
            <a href={social.resume} target='_blank' rel='noopener noreferrer' className='hero__resume'>
              <i className='fas fa-file-alt'></i> Resume
            </a>
          )}
        </div>
      </div>
      <div className='hero__photo-wrap'>
        <img className='hero__photo' src={photo} alt={hero.name} width='280' height='280' />
      </div>
    </div>
  </section>
);

export default Hero;
