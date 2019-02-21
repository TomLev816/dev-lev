import React from 'react';
import {teamMembers} from '../../constants';
import MemberCard from './MemberCard'

// const createCard = (membersArray) => {
//
//   })
// }

export default function AboutTeam(props) {
  console.log(teamMembers)
  return (
    <div>
      <div>
        TEAM MEMBERS
      </div>
      <div>
        {teamMembers.map(member => {return <MemberCard teamMember={member} /> })}
      </div>
    </div>
  );
}
