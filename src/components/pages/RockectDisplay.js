/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import './RockectDisplay.css';

const RockectDisplay = () => {
  const rockects = useSelector((state) => state.rockects);

  const renderRockect = rockects.map((rockect) => (
    <div key={rockect.id} className="main">
      <div className="rocketImage">
        <img src={rockect.flickr_images} alt={rockect.rocket_name} />
      </div>
      <div className="rocketDescription">
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
