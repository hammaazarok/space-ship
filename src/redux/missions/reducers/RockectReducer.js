/* eslint-disable no-unused-vars */

import ActionTypes from '../ActionTypes';

const initialState = {
  rocket: {
    id: 1,
    title: 'Oyinlade',
    category: 'programmer',
  },
};
const rocketReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKECTS:
      return state;
    default: return state;
  }
};
export default rocketReducer;
