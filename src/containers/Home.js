import React, { Component } from 'react';
import HomeGreeting from '../components/HomeGreeting/HomeGreeting'

export default class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div className='home-top-background'>
          <HomeGreeting />
        </div>
        <div>
          Stuff under the main picture
        </div>
      </div>
    );
  }

}
