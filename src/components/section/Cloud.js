import React from 'react';
import { cloud } from '../../profile';

const Cloud = () => (
  <section id='cloud' className='section cloud'>
    <div className='container'>
      <div className='cloud__intro' data-aos='fade-up'>
        <i className='fas fa-cloud cloud__badge'></i>
        <h2 className='section__title section__title--light'>{cloud.title}</h2>
        <p>{cloud.intro}</p>
      </div>
      <div className='grid grid--3' data-aos='fade-up'>
        {cloud.points.map((p) => (
          <div key={p.label} className='card card--glass'>
            <i className={`card__icon ${p.icon}`}></i>
            <h4 className='card__title'>{p.label}</h4>
            <p className='card__text'>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Cloud;
