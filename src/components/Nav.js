import React from 'react';
import { NavLink } from 'react-router-dom';
import space from '../assets/images/planet2.png';
import './Nav.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/Profile',
    text: 'My profile',
  },

];

const Nav = () => (
  <div className="nav">
    <div className="left-nav">
      <img className="logo" src={space} alt="space" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <div className="right-nav">
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? '#00d7c6' : 'RGB(246, 141, 54)',
          })}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  </div>
);

export default Nav;
