import React, { useEffect, useState } from 'react';
import { hero } from '../../profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'What I Do' },
  { href: '#cloud', label: 'Cloud' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className='container nav__inner'>
        <a href='#top' className='nav__brand' onClick={() => setOpen(false)}>
          {hero.name}
        </a>
        <button
          className='nav__toggle'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
