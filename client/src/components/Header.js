import React from 'react';
import catLogo from '../images/CatwikiLogo.svg';

const Header = () => {
  return (
    <header className='HeaderContainer'>
      <img className='HeaderBrand' src={catLogo} alt='Brand' />
    </header>
  );
};

export default Header;
