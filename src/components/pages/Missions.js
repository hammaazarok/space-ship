import React from 'react';

const Missions = () => {
  const fetchMissions = () => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  fetchMissions();
  return (
    <div>Missions</div>
  );
};

export default Missions;
