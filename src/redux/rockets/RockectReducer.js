/* eslint-disable no-unused-vars */
import ActionTypes from './ActionTypes';

const initialState = [
  {
    id: 1,
    title: 'Oyinlade',
    category: 'programmer',
  },
];
const rockectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKECTS:
      return state;
    default: return state;
  }
};
export default rockectReducer;
