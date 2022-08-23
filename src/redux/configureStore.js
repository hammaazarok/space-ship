import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rockectReducer from './rockets/RockectReducer';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockects: rockectReducer,
  },
});

export default store;
