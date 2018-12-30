import React from 'react';

const Heading = ({ type, title, city }) => (
  <div>
    <div>{type}</div>
    <div>{title}</div>
    <div>{city}</div>
  </div>
);

Heading.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};

export default Heading;
