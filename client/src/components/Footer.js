import React from 'react';
import catLogo from '../images/CatwikiWhiteLogo.svg';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className='Footer'>
        <img className='FooterLogo' src={catLogo} alt='Brand' />
        <p className='FooterText'>
          <span>&#169;</span>debo9210 - devchallenge.io {date}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
