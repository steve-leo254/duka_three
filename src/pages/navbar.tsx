import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsKey
} from 'react-icons/bs';

interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list '>
        <li className='sidebar-list-item'>
          <a href="/dashboard">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/product">
            <BsFillArchiveFill className='icon'/> Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/sales">
            <BsFillArchiveFill className='icon'/> Sales
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> Categories
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/about">
            <BsPeopleFill className='icon'/> About
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/login">
            <BsKey className='icon'/> Login
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/register">
            <BsMenuButtonWideFill className='icon'/> Sign-in
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;