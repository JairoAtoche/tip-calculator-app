import React from 'react';
import logo from '../../assets/logo.svg';
import './header.scss';

const Header = () => {
  return(
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' className='logo__img'/>
      </div>
    </header>
  );
};

export default Header;