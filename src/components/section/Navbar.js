import React from 'react';

const scrollTo = () => {
  window.scrollTo({
    top: 100000,
    left: 0,
    behavior: 'smooth',
  });
};
const scrollToAbout = () => {
  window.scrollTo({
    top: 1000,
    left: 0,
    behavior: 'smooth',
  });
};
const scrollToPortfolio = () => {
  window.scrollTo({
    top: 2000,
    left: 0,
    behavior: 'smooth',
  });
};

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <ul>
        <li onClick={scrollToAbout}>
          <h5>about</h5>
        </li>
        <li onClick={scrollToPortfolio}>
          <h5>portfolio</h5>
        </li>
        <li>
          <h5 onClick={scrollTo}>contact</h5>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
