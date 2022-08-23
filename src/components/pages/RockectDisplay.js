import React from 'react';
import { useSelector } from 'react-redux';

const RockectDisplay = () => {
  const rockects = useSelector((state) => state.rockects);
  const { title } = rockects[0];
  return (
    <div>
      {title}
    </div>
  );
};

export default RockectDisplay;
