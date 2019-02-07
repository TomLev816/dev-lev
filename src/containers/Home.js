import React, { Component } from 'react';
import Solutions from '../components/Solutions'

export default class Home extends Component {

  render() {
    return (
      <div className="home-page text-center">
        <div className='home-top-background'>
          <div>
            Welcome to Dev Lev Group. We have tons of clients. Go Away
          </div>
          <Solutions />
        </div>
        <div>
          Stuff under the main picture
        </div>
      </div>
    );
  }

}
