import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const Missions = missions.filter((m) => m.isMember);
  const rockects = useSelector((state) => state.rockects);
  const Rockects = rockects.filter((rock) => rock.reserved);
  return (
    <>
      <div className="profile">
        <div className="profile-missions">
          <h2>My Missions</h2>
          <ListGroup>
            {Missions.map(((m) => (
              <ListGroup.Item key={m.mission}>{m.mission_name}</ListGroup.Item>
            )))}
          </ListGroup>
        </div>
        <div className="profile-rockets">
          <h2>My Rockets</h2>
          <ListGroup>
            {Rockects.map(((rock) => (
              <ListGroup.Item key={rock.id}>{rock.rocket_name}</ListGroup.Item>
            )))}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Profile;
