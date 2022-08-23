/* eslint-disable no-unused-vars */
import ActionTypes from './ActionTypes';

const initialState = [];
const rockectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKECTS:
      return payload;
    default: return state;
  }
};
export default rockectReducer;
