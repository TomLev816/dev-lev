import React from 'react';
import {teamMembers} from '../../constants';
import MemberCard from './MemberCard'
import './AboutTeam.css'

export default function AboutTeam(props) {
  console.log(teamMembers)
  return (
    <div>
      <div className='team-members-header'>
        <h1>TEAM MEMBERS</h1>
      </div>
      <div className='member-card-container' >
        {teamMembers.map(member => {return <MemberCard teamMember={member} /> })}
      </div>
    </div>
  );
}
