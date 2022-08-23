import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/RocketReducer';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;
