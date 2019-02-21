import React from 'react';


export default function (props) {
  console.log(props)
  return (
    <div>{props.teamMember.name}</div>
  );
}
