import { combineReducers } from '@reduxjs/toolkit';
import rocketReducer from './RockectReducer';

const reducers = combineReducers({
  allRockects: rocketReducer,
});

export default reducers;
