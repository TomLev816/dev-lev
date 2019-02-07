import React from 'react';
import {NavLink} from 'react-router-dom'


export default function Solutions(props) {
  return (
    <div className='solutions-box'>
      <div className='font-size-3em'>
        WE DEVELOP SOFTWARE SOLUTIONS FOR STARTUPS
      </div>
      <div className='text-center font-size-2em nav-link'>
        <NavLink to='/contact' >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
