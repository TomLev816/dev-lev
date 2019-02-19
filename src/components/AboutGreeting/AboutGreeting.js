import React from 'react';
import './AboutGreeting.css'

export default function AboutGreeting(props) {
  return (
    <div className="about-greeting-wrapper">
      <div className='about-greeting'>
        <div className='about-greeting-hey'>
          Hey! Were DevLevGroup!
        </div>
        <div className='about-greeting-message'>
          We are a software development company that helps startups build successful, scalable products that users love.
        </div>
    </div>
    </div>
  );
}
