import './Missions.css';
import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { addremoveMembertoMission, LoadMessions } from '../../redux/missions/missions';

const Missions = () => {
  const fetchMissions = async () => {
    const missions = [];
    await fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((json) => {
        json.forEach((e) => {
          const mission = {
            mission_id: e.mission_id,
            mission_name: e.mission_name,
            description: e.description,
            isMember: false,
          };
          missions.push(mission);
        });
      });
    return missions;
  };
  const dispatch = useDispatch();
  useEffect(() => { fetchMissions().then((res) => dispatch(LoadMessions(res))); }, []);
  const { error, loading, missions } = useSelector((state) => state.missions);
  const Missions = missions;

  console.log(error, loading, Missions);
  const toggleMember = (id) => {
    console.log(id);
    dispatch(addremoveMembertoMission(id));
  };
  return (
    <div className="table-container">
      <Table striped bordered hover size="sm" className="missions-table ml-5">
        <thead>
          <tr>
            <th>Mission</th>
            <th className="desc">Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          { Missions.map((m) => (
            <tr key={m.mission_id}>
              <td><strong>{m.mission_name}</strong></td>
              <td>{m.description}</td>
              <td className="td-button">
                <h5>
                  {m.isMember && (
                  <Badge bg="info">Active Member</Badge>
                  )}
                  {!m.isMember && (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                  )}

                </h5>
              </td>
              <td className="td-button">
                {m.isMember && (
                <Button variant="outline-danger" onClick={() => toggleMember(m.mission_id)}>Leave Mission</Button>
                )}
                {!m.isMember && (
                <Button variant="outline-secondary" onClick={() => toggleMember(m.mission_id)}>Join Mission</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
