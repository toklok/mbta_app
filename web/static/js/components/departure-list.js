import React from 'react';

const Listing = (props) => {
  return (
    <div>
      { props.timestamp }
      { props.origin }
      { props.trip }
      { props.destination }
      { props.status }
    </div>
  )
};

export default Listing;
