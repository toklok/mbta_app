import React from 'react';

const Listing = (props) => {
  return (
    <li>
      <h1 className="origin">Origin: { props.origin } </h1>
      <span className="trip">Trip #: { props.trip }</span>
      <h2 className="destination">Destination: { props.destination }</h2>
      <span className="timestamp">Time: { props.timestamp }</span>
      <h3 className="status">Status: { props.status }</h3>
    </li>
  )
};

export default Listing;
