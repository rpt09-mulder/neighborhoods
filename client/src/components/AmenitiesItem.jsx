import React from 'react';

const AmenitiesItem = ({ amenity }) => (
  <div>
    {amenity}
  </div>
);

AmenitiesItem.propTypes = {
  amenity: PropTypes.string.isRequired
};

export default AmenitiesItem;
