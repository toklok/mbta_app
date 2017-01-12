import React from 'react';

const Listing = (props) => {
  return (
    <li>
      <h1 className="origin">Origin: { props.origin } </h1>
      <p className="trip">Trip #: { props.trip }</p>
      <h2 className="destination">Destination: { props.destination }</h2>
      <p className="timestamp">Time: { props.timestamp }</p>
      <h3 className="status">Status:
      {
        (props.status === 'On Time') ? <span> On Time</span> : <span> { props.status }</span>
      }
      </h3>
      <hr/>
    </li>
  )
};

export default Listing;
