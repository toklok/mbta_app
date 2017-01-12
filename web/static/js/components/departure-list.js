import React from 'react';

const Listing = (props) => {
  return (
    <li>
      <h1 className="origin">Origin: { props.origin } </h1>
      <p className="trip">Trip #: { props.trip }</p>
      <h2 className="destination">Destination: { props.destination }</h2>
      <span className="timestamp">Time: { props.timestamp }</span>
      <h3 className="status">Status: { props.status }</h3>
      <hr/>
    </li>
  )
};

export default Listing;
