import React from 'react';
import { contact } from '../../profile';

const Footer = () => (
  <footer className='footer'>
    <div className='container footer__inner'>
      <span>
        © {new Date().getFullYear()} {contact.copyright}
      </span>
      <a href='#top'>
        Back to top <i className='fas fa-arrow-up'></i>
      </a>
    </div>
  </footer>
);

export default Footer;
