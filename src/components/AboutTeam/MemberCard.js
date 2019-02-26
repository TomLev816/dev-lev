import React, { Component } from 'react';


// really didnt want this to be a class component but need state to use hover effect
// still not worth adding redux
export default class MemberCard extends Component {
  state = {
    hover: false
  }

// changes if person hovers over a card or stops hovering on card
  hoverOnOff = () => {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    console.log(this.props)
    return (
      <div className='member-card' onMouseEnter={this.hoverOnOff} onMouseLeave={this.hoverOnOff}>
        <h2>{this.props.teamMember.name}</h2>

        {/* if hover is true it shows the members bio */ }
        <div>
          {this.state.hover ?
            <div className='member-bio'> {this.props.teamMember.bio} </div> :
            <img className="members-image" src={this.props.teamMember.imgSrc} alt="" ></img>}
        </div>
      </div>
    );
  }
}
