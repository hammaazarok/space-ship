/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

const RockectDisplay = () => {
  const rockects = useSelector((state) => state.rockects);

  const renderRockect = rockects.map((rockect) => (
    <div key={rockect.id}>
      <div>
        <img src={rockect.flickr_images} alt={rockect.rocket_name} />
      </div>
      <div>
        <h1>{rockect.rocket_name}</h1>
        <p>
          {rockect.description}
        </p>
      </div>
    </div>
  ));

  return (
    <>{ renderRockect }</>
  );
};

export default RockectDisplay;
