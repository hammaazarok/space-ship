import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import RockectDisplay from './RockectDisplay';
import setRockect, { bookRocket } from '../../redux/rockets/RockectAction';

const Rockect = () => {
  const rockects = useSelector((state) => state.rockects);
  const dispatch = useDispatch();
  const fetchRockects = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/rockets')
      .catch(() => {
      });
    dispatch(setRockect(response.data));
    return rockects;
  };

  useEffect(() => {
    fetchRockects();
  }, []);

  const bookingHandler = (id) => {
    dispatch(bookRocket(id));
  };
  return (
    <div>
      {rockects
        && rockects.map((rockect) => (
          <RockectDisplay
            key={rockect.id}
            id={rockect.id}
            reserved={rockect.reserved}
            name={rockect.rocket_name}
            description={rockect.description}
            img={rockect.flickr_images}
            bookingHandler={bookingHandler}
          />
        ))}
    </div>
  );
};

export default Rockect;
