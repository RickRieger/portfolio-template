import React from 'react';
import { header } from '../../profile';
import { colorMix } from 'tsparticles/Utils';
import '../../styles/no-touch.min.css';

const Header = () => {
  const toggleDarkMode = (e) => {
    document.documentElement.classList.toggle('dark-mode');
    document.getElementById('form').classList.toggle('dark-mode');
    document.getElementById('not-dark3').classList.toggle('inverse-dark');
    document.getElementById('not-dark4').classList.toggle('inverse-dark');
    // document.getElementById('not-dark2').classList.toggle('inverse-dark');

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
        <h1 style={{ color: '#6c757d' }}>
          <span style={{ color: 'darkorange' }}>Hello.</span>
          {` My name is ${header.name}`}
        </h1>
        <p style={{ color: '#6c757d' }} className='line-1 anim-typewriter'>
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
    </div>
  );
};

export default Header;
