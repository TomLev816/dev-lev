import React from 'react';
import { NavLink } from 'react-router-dom'
import './HomeGreeting.css'


export default function HomeGreeting(props) {
  return (
    <div className="home-greeting-wrapper">
      <div className='home-greeting'>
        <div className='home-greeting-message'>
          Developing Software Solutions For Startups
        </div>
        <div className='home-greeting-contact'>
          <NavLink to='/contact' >
            Let's get started!
          </NavLink>
        </div>
      </div>
    </div>
  );
}
