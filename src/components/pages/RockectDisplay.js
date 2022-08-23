/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './RockectDisplay.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const RockectDisplay = ({
  name, description, img, id, reserved, bookingHandler,
}) => (
  <div className="main">
    <div className="rocketImage">
      <img src={img} alt="rockets" />
    </div>
    <div className="rocketDescription">
      <h1>{name}</h1>
      <p>
        {reserved ? (
          <>
            <Badge bg="primary">Reserved</Badge>
            <span> </span>
          </>
        ) : (
          <></>
        )}
        {description}
      </p>
      {reserved ? (
        <Button
          variant="primary"
          className="btn btn-cancel-reserve width-20vw back-color-gray"
          onClick={() => bookingHandler(id)}
          id={id}
        >
          Cancel Reservation
        </Button>
      ) : (
        <Button
          variant="primary"
          className="btn btn-reserve width-20vw"
          onClick={() => bookingHandler(id)}
          id={id}
        >
          Reserve Rocket
        </Button>
      )}
    </div>
  </div>
);

RockectDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
  bookingHandler: PropTypes.func.isRequired,
};
export default RockectDisplay;
