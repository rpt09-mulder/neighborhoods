import React from 'react';
import PropTypes from 'prop-types';
import AmenitiesItem from './AmenitiesItem';
import '../../styles/Amenities.css';

const Amenities = ({ amenities }) => (
  <div>
    <h3>Amenities</h3>
    <div>
      {amenities.map(amenity => (
        <AmenitiesItem
          amenity={amenity}
          key={amenity}
        />
      ))
      }
    </div>
  </div>
);

Amenities.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Amenities;
