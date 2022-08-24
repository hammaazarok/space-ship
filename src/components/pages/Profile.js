import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const Missions = missions;
  return (
    <>
      <div className="profile">
        <div className="profile-missions">
          <h2>My Missions</h2>
          <ListGroup>
            {Missions.map(((m) => (
              m.isMember && (
              <ListGroup.Item key={m.mission_id}>{m.mission_name}</ListGroup.Item>
              ))))}
          </ListGroup>
        </div>
        <div className="profile-rockets">
          <h2>My Rockets</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
