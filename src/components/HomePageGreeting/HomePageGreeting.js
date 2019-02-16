import React from 'react';
import { NavLink } from 'react-router-dom'
import './HomePageGreeting.css'


export default function HomePageGreeting(props) {
  return (
    <div className="home-page-greeting-wrapper">
      <div className='home-page-greeting'>
        <div className='font-size-3em'>
          WE DEVELOP SOFTWARE SOLUTIONS FOR STARTUPS
        </div>
        <div className='text-center font-size-2em nav-link'>
          <NavLink to='/contact' >
            Contact Us
        </NavLink>
        </div>
      </div>
    </div>
  );
}
