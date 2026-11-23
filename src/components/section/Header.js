import React, { useEffect, useRef } from 'react';
import { header } from '../../profile';
import '../../styles/no-touch.min.css';

// Dark mode is opt-in: it only turns on when the visitor flips the switch,
// and that choice is remembered. (It used to switch on automatically from the
// visitor's OS setting, from scripts in public/index.html.)
const applyDarkMode = (on) => {
  const toggle = (el, cls) => el && el.classList.toggle(cls, on);
  toggle(document.documentElement, 'dark-mode');
  toggle(document.getElementById('form'), 'dark-mode');
  toggle(document.getElementById('not-dark3'), 'inverse-dark');
  toggle(document.getElementById('not-dark4'), 'inverse-dark');
  Array.from(document.getElementsByClassName('img-pro')).forEach((el) => toggle(el, 'inverse-dark'));
};

const readSavedMode = () => {
  try {
    return localStorage.getItem('mode');
  } catch {
    return null;
  }
};

const Header = () => {
  const switchRef = useRef(null);

  // Restore a dark-mode choice the visitor made on an earlier visit
  useEffect(() => {
    if (readSavedMode() === 'Dark') {
      applyDarkMode(true);
      if (switchRef.current) switchRef.current.checked = true;
    }
  }, []);

  const toggleDarkMode = (e) => {
    const on = e.target.checked;
    applyDarkMode(on);
    try {
      localStorage.setItem('mode', on ? 'Dark' : 'Light');
    } catch {
      /* storage unavailable (private mode); the choice just won't be remembered */
    }
  };

  return (
    <div>
      <div className='Header'>
        <h1 style={{ color: '#6c757d' }}>
          <span style={{ color: 'darkorange' }}>Hello.</span>
          {` My name is ${header.name}`}
        </h1>
        <p style={{ color: '#6c757d' }} className='line-1 anim-typewriter'>
          {header.tagline}
        </p>
        <label className='switch' title='Dark mode'>
          <input
            id='mode-switch'
            ref={switchRef}
            onChange={toggleDarkMode}
            type='checkbox'
            aria-label='Dark mode'
          />
          <span className='slider round'></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
