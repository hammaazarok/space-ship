import React from 'react';
import { useSelector } from 'react-redux';

const Rockect = () => {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  return (
    <div>Rockect</div>
  );
};

export default Rockect;
