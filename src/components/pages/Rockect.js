import React from 'react';
import { useSelector } from 'react-redux';

const Rockect = () => {
  const rockects = useSelector((state) => state.rockects);
  console.log(rockects);
  return (
    <div>Rockect</div>
  );
};

export default Rockect;
