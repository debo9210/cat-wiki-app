import React from 'react';
import { Link } from 'react-router-dom';
import catLogo from '../images/CatwikiLogo.svg';

const Header = () => {
  return (
    <header className='HeaderContainer'>
      <Link to='/'>
        <img className='HeaderBrand' src={catLogo} alt='Brand' />
      </Link>
    </header>
  );
};

export default Header;
