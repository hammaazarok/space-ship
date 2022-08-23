import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadMessions } from '../../redux/missions/missions';

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
  return (
    <div>
      Missions
    </div>
  );
};

export default Missions;
