import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import RockectDisplay from './RockectDisplay';
import setRockect from '../../redux/rockets/RockectAction';

const Rockect = () => {
  const rockects = useSelector((state) => state.rockects);
  const dispatch = useDispatch();
  const fetchRockects = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/rockets')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setRockect(response.data));
  };

  useEffect(() => {
    fetchRockects();
  }, []);
  console.log('rockects:', rockects);

  return (
    <div>
      <RockectDisplay />
    </div>
  );
};

export default Rockect;
