import React from 'react';
import { header } from '../../profile';
import { colorMix } from 'tsparticles/Utils';
import '../../styles/no-touch.min.css'

const Header = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: 'smooth',
    });
  };
  const scrollToAbout = () => {
    window.scrollTo({
      top: 900,
      left: 0,
      behavior: 'smooth',
    });
  };
  const scrollToPortfolio = () => {
    window.scrollTo({
      top: 1700,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = (e) => {
    document.documentElement.classList.toggle('dark-mode');
    document.getElementById('form').classList.toggle('dark-mode');
    document.getElementById('not-dark2').classList.toggle('inverse-dark');
    document.getElementById('not-dark3').classList.toggle('inverse-dark');
    document.getElementById('not-dark4').classList.toggle('inverse-dark');
    var x = document.getElementsByClassName('img-pro');
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle('inverse-dark');
    }

    if (document.documentElement.classList.contains('dark-mode'))
      localStorage.setItem('mode', 'Dark');
    else localStorage.setItem('mode', 'Light');
  };

  return (
    <div>
      <div className='Header'>
        <h1 style={{color:'#6c757d'}}><span style={{color:'darkorange'}}>Hello.</span>{` My name is ${header.name}`}</h1>
        <p style={{color:'#6c757d'}} className='line-1 anim-typewriter'>
          and I build things for the web...{' '}
        </p>
        <label className='switch'>
          <input
            id='mode-switch'
            onClick={(e) => toggleDarkMode(e)}
            type='checkbox'
          />
          <span className='slider round'></span>
        </label>
      </div>
      <div
        onClick={scrollToAbout}
        alt='About Me'
        title='About me'
        className='gtp-about'
      >
        <h2
          className='links'
          href='#about'
        >
          About
        </h2>{' '}
      </div>
      <div
        onClick={scrollToPortfolio}
        alt='Portfolio'
        title='Portfolio'
        className='gtp-portfolio'
      >
        <h2
          className='links'
          href='#about'
        >
          Portfolio
        </h2>{' '}
      </div>
      <div
        onClick={scrollTo}
        alt='Contact Me'
        title='Contact me'
        className='gtp'
      >
        <h2
          className='links'
        >
          Contact
        </h2>{' '}
      </div>
    </div>
  );
};

export default Header;
