import React from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch, 
} from 'react-icons/bs';

interface HeaderProps {
  OpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ OpenSidebar }) => {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsSearch className='icon' onClick={() => OpenSidebar()} /> {/* Example usage */}
      </div>
      <div className='header-right'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
};

export default Header;