import React from 'react';
import AboutGreeting from '../components/AboutGreeting/AboutGreeting'
import AboutTeam from '../components/AboutTeam/AboutTeam'

export default function About(props) {
  return (
    <div className='about-page'>
        <AboutGreeting/>
        <AboutTeam />
    </div>
  );
}
