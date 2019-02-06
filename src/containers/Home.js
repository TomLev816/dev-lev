import React, { Component } from 'react';


export default class Home extends Component {

  render() {
    return (
      <div className="home-page text-center">
        <div className='home-top-background'>
          <div>
            Welcome to Dev Lev Group. We have tons of clients. Go Away
          </div>
          <div className='solutions-box font-size-3em'>
            WE DEVELOP SOFTWARE SOLUTIONS FOR STARTUPS
          </div>
        </div>
        <div>
          Stuff under the main picture
        </div>
      </div>
    );
  }

}
