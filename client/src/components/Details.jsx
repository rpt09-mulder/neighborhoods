import React from 'react';
import DetailsItem from './DetailsItem';

const Details = ({ descriptions }) => (
  <div>
    {descriptions.map(description => (
      <DetailsItem
        description={description}
        key={description}
      />
    ))
    }
  </div>
);

Details.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Details;
