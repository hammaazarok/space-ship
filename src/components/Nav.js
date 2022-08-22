import React from 'react'
import {NavLink } from 'react-router-dom'
import space from '../assets/images/planet.png';


const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets'
 },
 {
  id: 2,
  path: '/missions',
  text: 'Missions'
},
{
  id: 3,
  path: '/Profile',
  text: 'My profile'
},

]

const Nav = () => {
  return (
    <div>
      <img src={space} alt='space image' />
      <h1>Space Traveler's Hub</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : null,
              })} 
              >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav