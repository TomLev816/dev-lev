import React, { Component } from 'react';
import HomePageGreeting from '../components/HomePageGreeting/HomePageGreeting'

export default class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div className='home-top-background'>
          <HomePageGreeting />
        </div>
        <div>
          Stuff under the main picture
        </div>
      </div>
    );
  }

}
